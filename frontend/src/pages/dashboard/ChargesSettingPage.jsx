import React, { useEffect, useMemo, useState } from 'react';
import { Calculator, Edit3, Play, Plus, Save } from 'lucide-react';

const DEFAULT_PROFILE = {
  mode: 'Fixed',
  status: 'Active',
  rateType: 'Flat Fee',
  rateValue: '0',
};

const DEFAULT_RANGE_FORM = {
  minAmount: '',
  maxAmount: '',
  rateType: 'Percentage',
  rateValue: '',
  sortOrder: '0',
  status: 'Active',
};

const STORAGE_KEY = 'admin_charge_profiles';

export default function ChargesSettingPage({ usersCount = 3, onSaved }) {
  const [activeService, setActiveService] = useState('Pay In');
  const [savedProfiles, setSavedProfiles] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      return {};
    }
  });
  const [editingProfiles, setEditingProfiles] = useState({});
  const [mode, setMode] = useState(DEFAULT_PROFILE.mode);
  const [status, setStatus] = useState(DEFAULT_PROFILE.status);
  const [rateType, setRateType] = useState(DEFAULT_PROFILE.rateType);
  const [rateValue, setRateValue] = useState(DEFAULT_PROFILE.rateValue);
  const [previewAmount, setPreviewAmount] = useState('1000');
  const [previewResult, setPreviewResult] = useState(null);
  const [rangeFormOpen, setRangeFormOpen] = useState(false);
  const [rangeDraft, setRangeDraft] = useState(DEFAULT_RANGE_FORM);
  const [rangesByService, setRangesByService] = useState({});
  const [rangeError, setRangeError] = useState('');
  const savedProfile = savedProfiles[activeService];
  const isProfileSaved = Boolean(savedProfile);
  const isEditingProfile = editingProfiles[activeService] ?? !isProfileSaved;
  const isFormLocked = isProfileSaved && !isEditingProfile;
  const isDynamicMode = mode === 'Dynamic';
  const activeRanges = rangesByService[activeService] || [];

  const amount = Math.max(Number(previewAmount) || 0, 0);
  const rate = Math.max(Number(rateValue) || 0, 0);
  const charge = rateType === 'Percentage' ? (amount * rate) / 100 : rate;
  const netPayout = Math.max(amount - charge, 0);
  const preview = previewResult || {
    amount,
    charge: isDynamicMode ? 0 : charge,
    netPayout,
    rule: isDynamicMode ? mode : `${mode} - ${rateType}`,
  };

  const formatINR = (value) => {
    const numericValue = Number.isFinite(Number(value)) ? Number(value) : 0;
    return `\u20B9${numericValue.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const note = useMemo(() => {
    if (mode === 'Dynamic') {
      return `Dynamic mode allows the charge rule to vary by transaction conditions for ${activeService}.`;
    }
    return `Fixed mode applies one global ${rateType.toLowerCase()} charge to every ${activeService} transaction.`;
  }, [activeService, mode, rateType]);

  const serviceContent = {
    'Pay In': {
      tab: 'Pay In Charge',
      kicker: 'Pay In Charge Rules',
      title: 'Manage charges collected on customer Pay In transactions',
      copy: 'The customer payment amount is treated as gross. We calculate the Pay In charge first, store the exact rule snapshot, and show the net settlement amount after charge deduction.',
      profileTitle: 'Global Pay In Charge Profile',
      profileSub: 'One active profile controls how collection charges are calculated for every Pay In transaction.',
      previewTitle: 'Pay In Charge Preview',
      previewSub: 'Check how much charge is deducted before the collected amount is settled.',
      amountLabel: 'Transaction Amount',
      requestedLabel: 'Collected Amount',
      netLabel: 'Net Settlement',
      rangeTitle: 'Pay In Charge Ranges',
      rangeSubtitle: 'Dynamic mode uses editable ranges. Each range must carry one rate type and one rate value.',
      rangeNotice: 'Switch the global profile to DYNAMIC to manage range-based Pay In charge rules.',
      emptyRanges: 'No Pay In charge ranges are available yet.',
    },
    'Pay Out': {
      tab: 'Pay Out Charge',
      kicker: 'Pay Out Charge Rules',
      title: 'Manage charges deducted before Pay Out transfer processing',
      copy: 'The requested payout amount is treated as gross. We calculate the Pay Out charge first, store the exact rule snapshot, and send the net transfer amount for payout processing.',
      profileTitle: 'Global Pay Out Charge Profile',
      profileSub: 'One active profile controls how payout charges are calculated for every Pay Out transfer.',
      previewTitle: 'Pay Out Charge Preview',
      previewSub: 'Check how much charge is deducted before a transfer is sent for processing.',
      amountLabel: 'Transfer Amount',
      requestedLabel: 'Requested Amount',
      netLabel: 'Net Payout',
      rangeTitle: 'Pay Out Charge Ranges',
      rangeSubtitle: 'Dynamic mode uses editable ranges. Each range must carry one rate type and one rate value.',
      rangeNotice: 'Switch the global profile to DYNAMIC to manage range-based Pay Out charge rules.',
      emptyRanges: 'No Pay Out charge ranges are available yet.',
    },
  };
  const content = serviceContent[activeService];

  useEffect(() => {
    const profile = savedProfiles[activeService] || DEFAULT_PROFILE;
    setMode(profile.mode);
    setStatus(profile.status);
    setRateType(profile.rateType);
    setRateValue(profile.rateValue);
    const nextAmount = Math.max(Number(previewAmount) || 0, 0);
    const nextRate = Math.max(Number(profile.rateValue) || 0, 0);
    const nextCharge = profile.mode === 'Dynamic' ? 0 : profile.rateType === 'Percentage' ? (nextAmount * nextRate) / 100 : nextRate;
    setPreviewResult({
      amount: nextAmount,
      charge: nextCharge,
      netPayout: Math.max(nextAmount - nextCharge, 0),
      rule: `${profile.mode} - ${profile.rateType}`,
    });
    setRangeFormOpen(false);
    setRangeDraft(DEFAULT_RANGE_FORM);
    setRangeError('');
  }, [activeService, savedProfiles]);

  useEffect(() => {
    if (!rangeError) return undefined;
    const timeoutId = window.setTimeout(() => setRangeError(''), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [rangeError]);

  const handleProfileAction = () => {
    if (isFormLocked) {
      setEditingProfiles(prev => ({ ...prev, [activeService]: true }));
      return;
    }

    const profile = {
      mode,
      status,
      rateType: isDynamicMode ? '' : rateType,
      rateValue: isDynamicMode ? '0' : String(Math.max(Number(rateValue) || 0, 0)),
      savedAt: new Date().toISOString(),
    };
    const nextProfiles = { ...savedProfiles, [activeService]: profile };
    setSavedProfiles(nextProfiles);
    setEditingProfiles(prev => ({ ...prev, [activeService]: false }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProfiles));
    onSaved?.();
  };

  const handleCancel = () => {
    const profile = savedProfiles[activeService] || DEFAULT_PROFILE;
    setMode(profile.mode);
    setStatus(profile.status);
    setRateType(profile.rateType);
    setRateValue(profile.rateValue);
    setEditingProfiles(prev => ({ ...prev, [activeService]: false }));
  };

  const handlePreviewCharge = () => {
    const nextAmount = Math.max(Number(previewAmount) || 0, 0);
    const nextRate = Math.max(Number(rateValue) || 0, 0);
    const nextCharge = isDynamicMode ? 0 : rateType === 'Percentage' ? (nextAmount * nextRate) / 100 : nextRate;
    setPreviewResult({
      amount: nextAmount,
      charge: nextCharge,
      netPayout: Math.max(nextAmount - nextCharge, 0),
      rule: isDynamicMode ? mode : `${mode} - ${rateType}`,
    });
  };

  const handleOpenRangeForm = () => {
    if (!isDynamicMode) return;
    setRangeError('');
    setRangeFormOpen(true);
  };

  const handleRangeChange = (field, value) => {
    setRangeDraft(prev => ({ ...prev, [field]: value }));
  };

  const handleCancelRange = () => {
    setRangeFormOpen(false);
    setRangeDraft(DEFAULT_RANGE_FORM);
    setRangeError('');
  };

  const handleSaveRange = () => {
    const requiredFields = [
      rangeDraft.minAmount,
      rangeDraft.maxAmount,
      rangeDraft.rateType,
      rangeDraft.rateValue,
      rangeDraft.sortOrder,
      rangeDraft.status,
    ];

    if (requiredFields.some(value => String(value).trim() === '')) {
      setRangeError('please complete all ranges fileds');
      return;
    }

    const nextRange = {
      id: Date.now(),
      minAmount: Math.max(Number(rangeDraft.minAmount) || 0, 0),
      maxAmount: Math.max(Number(rangeDraft.maxAmount) || 0, 0),
      rateType: rangeDraft.rateType,
      rateValue: Math.max(Number(rangeDraft.rateValue) || 0, 0),
      sortOrder: Math.max(Number(rangeDraft.sortOrder) || 0, 0),
      status: rangeDraft.status,
    };

    setRangesByService(prev => ({
      ...prev,
      [activeService]: [...(prev[activeService] || []), nextRange],
    }));
    setRangeDraft(DEFAULT_RANGE_FORM);
    setRangeFormOpen(false);
    setRangeError('');
  };

  return (
    <div className="charges-setting-page animate-fade-in">
      <style>{`
        .charges-setting-page {
          position: relative;
          background: linear-gradient(180deg, #0b1020 0%, #070a12 100%);
          color: #e2e8f0;
          border-radius: 12px;
          padding: 18px;
          min-height: calc(100vh - 120px);
          font-size: 12px;
        }
        .charges-shell {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .charges-toast-error {
          position: fixed;
          top: 18px;
          right: 18px;
          z-index: 10000;
          max-width: min(360px, calc(100vw - 36px));
          border: 1px solid rgba(248, 113, 113, 0.30);
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(127, 29, 29, 0.98) 0%, rgba(153, 27, 27, 0.96) 100%);
          color: #ffffff;
          padding: 13px 16px;
          box-shadow: 0 16px 32px rgba(127, 29, 29, 0.35);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.35;
          animation: chargesToastIn 0.22s ease-out;
        }
        @keyframes chargesToastIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .charges-card {
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(148, 163, 184, 0.14);
          border-radius: 14px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.26);
          backdrop-filter: blur(18px);
        }
        .charges-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 24px;
        }
        .charges-title {
          margin: 0;
          color: #f8fafc;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0;
        }
        .charges-subtitle {
          margin: 8px 0 0;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 600;
        }
        .charges-stat-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(120px, 1fr));
          gap: 12px;
          min-width: 365px;
        }
        .charges-stat,
        .charges-info-box {
          border: 1px solid rgba(45, 212, 191, 0.2);
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.16) 0%, rgba(15, 23, 42, 0.72) 88%);
        }
        .charges-stat {
          min-height: 64px;
          padding: 12px 16px;
          border-radius: 10px;
        }
        .charges-stat-label,
        .charges-kicker,
        .charges-field-label,
        .charges-preview-label {
          color: #64748b;
          color: #94a3b8;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .charges-stat-value {
          display: block;
          margin-top: 6px;
          color: #f8fafc;
          font-size: 17px;
          font-weight: 800;
          line-height: 1;
        }
        .charges-tabs {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          padding: 0 2px;
        }
        .charges-tab {
          border: 0;
          background: transparent;
          color: #94a3b8;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }
        .charges-tab.active {
          background: rgba(20, 184, 166, 0.18);
          color: #5eead4;
          box-shadow: inset 0 0 0 1px rgba(45, 212, 191, 0.18);
        }
        .charges-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 525px;
          gap: 20px;
          padding: 22px 24px;
          align-items: center;
        }
        .charges-heading {
          color: #f8fafc;
          font-size: 22px;
          font-weight: 850;
          line-height: 1.15;
          margin: 8px 0 10px;
          letter-spacing: 0;
        }
        .charges-pill {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 4px 9px;
          background: rgba(37, 99, 235, 0.16);
          color: #93c5fd;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.06em;
          margin-left: 8px;
        }
        .charges-copy {
          color: #94a3b8;
          font-size: 11.5px;
          line-height: 1.6;
          margin: 0;
          max-width: 950px;
        }
        .charges-meta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 14px;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 600;
        }
        .charges-meta b {
          color: #cbd5e1;
          font-weight: 800;
        }
        .charges-info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .charges-info-box {
          min-height: 64px;
          padding: 14px 16px;
          border-radius: 9px;
        }
        .charges-info-value {
          margin-top: 7px;
          color: #f8fafc;
          font-size: 15px;
          font-weight: 850;
        }
        .charges-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.18fr) minmax(360px, 1fr);
          gap: 18px;
        }
        .charges-panel {
          padding: 20px;
        }
        .charges-panel-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }
        .charges-panel-title {
          color: #f8fafc;
          font-size: 14px;
          font-weight: 850;
          margin: 0 0 5px;
        }
        .charges-panel-sub {
          color: #94a3b8;
          font-size: 11px;
          margin: 0;
        }
        .charges-btn {
          border: 0;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 16px;
          background: linear-gradient(135deg, #20d7ce 0%, #08b8b8 100%);
          color: #ffffff;
          font-size: 11px;
          font-weight: 850;
          box-shadow: 0 8px 16px rgba(8, 184, 184, 0.24);
          white-space: nowrap;
        }
        .charges-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .charges-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .charges-input,
        .charges-select {
          width: 100%;
          height: 54px;
          border: 1px solid rgba(148, 163, 184, 0.22) !important;
          border-radius: 12px;
          background-color: #111827 !important;
          color: #f8fafc !important;
          -webkit-text-fill-color: #f8fafc;
          padding: 0 16px;
          font-size: 13px;
          font-weight: 700;
          line-height: 54px;
          outline: none;
          box-shadow: none !important;
        }
        .charges-select {
          appearance: auto;
        }
        .charges-select option {
          background: #111827;
          color: #f8fafc;
        }
        .charges-input::placeholder {
          color: #64748b;
          -webkit-text-fill-color: #64748b;
        }
        .charges-input:focus,
        .charges-select:focus {
          border-color: #2dd4bf;
          box-shadow: 0 0 0 3px rgba(20, 184, 184, 0.12);
        }
        .charges-input:disabled,
        .charges-select:disabled {
          opacity: 0.82;
          cursor: not-allowed;
          background-color: rgba(15, 23, 42, 0.88) !important;
          border-color: rgba(148, 163, 184, 0.14) !important;
        }
        .charges-note {
          margin: 16px 0 32px;
          background: rgba(20, 184, 166, 0.12);
          color: #5eead4;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 11px;
          font-weight: 700;
        }
        .charges-actions {
          border-top: 1px solid rgba(148, 163, 184, 0.12);
          padding-top: 14px;
          display: flex;
          justify-content: flex-end;
        }
        .charges-cancel {
          min-height: 36px;
          padding: 0 16px;
          border-radius: 8px;
          border: 1px solid rgba(148, 163, 184, 0.18);
          background: rgba(15, 23, 42, 0.72);
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 800;
        }
        .charges-preview-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 10px;
          align-items: end;
          margin: 14px 0;
        }
        .charges-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #93c5fd;
          background: rgba(37, 99, 235, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.18);
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 10px;
          font-weight: 850;
        }
        .charges-result-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .charges-result {
          min-height: 58px;
          border: 1px solid rgba(148, 163, 184, 0.14);
          border-radius: 10px;
          padding: 12px 14px;
          background: rgba(2, 6, 23, 0.42);
        }
        .charges-result strong {
          display: block;
          color: #f8fafc;
          font-size: 13px;
          font-weight: 850;
          margin-top: 5px;
        }
        .charges-range-card {
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(148, 163, 184, 0.14);
          border-radius: 14px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.26);
          backdrop-filter: blur(18px);
          color: #e2e8f0;
          overflow: hidden;
          padding: 0;
        }
        .charges-range-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 26px 10px;
        }
        .charges-range-title {
          margin: 0;
          color: #f8fafc;
          font-size: 16px;
          font-weight: 850;
          letter-spacing: 0;
        }
        .charges-range-sub {
          margin: 8px 0 0;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 600;
        }
        .charges-range-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .charges-range-count {
          min-height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 14px;
          background: rgba(20, 184, 166, 0.16);
          color: #5eead4;
          font-size: 11px;
          font-weight: 850;
          white-space: nowrap;
        }
        .charges-range-add {
          border: 0;
          min-height: 42px;
          border-radius: 10px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #4ee1dd 0%, #22c7c9 100%);
          color: #ffffff;
          font-size: 12px;
          font-weight: 850;
          box-shadow: 0 10px 22px rgba(34, 199, 201, 0.24);
          white-space: nowrap;
        }
        .charges-range-add:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          box-shadow: none;
          filter: grayscale(0.25);
        }
        .charges-range-body {
          padding: 10px 26px 90px;
        }
        .charges-range-notice {
          border-radius: 8px;
          background: rgba(20, 184, 166, 0.12);
          color: #5eead4;
          padding: 14px 16px;
          font-size: 12px;
          font-weight: 650;
          margin-bottom: 6px;
        }
        .charges-range-form {
          border: 1px solid rgba(45, 212, 191, 0.16);
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.96) 0%, rgba(8, 13, 24, 0.96) 100%);
          padding: 18px;
          margin-bottom: 14px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }
        .charges-range-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px 18px;
        }
        .charges-range-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .charges-range-label {
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 850;
        }
        .charges-range-input,
        .charges-range-select {
          width: 100%;
          height: 42px;
          border: 1px solid rgba(148, 163, 184, 0.18) !important;
          border-radius: 7px !important;
          background-color: rgba(2, 6, 23, 0.5) !important;
          color: #f8fafc !important;
          -webkit-text-fill-color: #f8fafc;
          padding: 0 12px !important;
          font-size: 12px;
          font-weight: 650;
          outline: none;
          box-shadow: none !important;
        }
        .charges-range-select {
          appearance: auto;
        }
        .charges-range-select option {
          background: #111827;
          color: #f8fafc;
        }
        .charges-range-input:focus,
        .charges-range-select:focus {
          border-color: #2dd4bf !important;
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.12) !important;
        }
        .charges-range-form-footer {
          border-top: 1px solid rgba(148, 163, 184, 0.10);
          margin-top: 20px;
          padding-top: 14px;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
        .charges-range-cancel,
        .charges-range-save {
          min-height: 42px;
          border-radius: 9px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 850;
          white-space: nowrap;
        }
        .charges-range-cancel {
          border: 1px solid rgba(148, 163, 184, 0.20);
          background: rgba(2, 6, 23, 0.36);
          color: #cbd5e1;
        }
        .charges-range-save {
          border: 0;
          background: linear-gradient(135deg, #4ee1dd 0%, #22c7c9 100%);
          color: #ffffff;
          box-shadow: 0 10px 22px rgba(34, 199, 201, 0.24);
        }
        .charges-range-status {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 4px 10px;
          background: rgba(20, 184, 166, 0.12);
          color: #5eead4;
          font-size: 10px;
          font-weight: 850;
        }
        .charges-range-table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }
        .charges-range-table th {
          color: #94a3b8;
          background: rgba(2, 6, 23, 0.26);
          border-bottom: 1px solid rgba(148, 163, 184, 0.14);
          padding: 16px;
          text-align: left;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .charges-range-table td {
          border-bottom: 1px solid rgba(148, 163, 184, 0.10);
          padding: 17px 16px;
          color: #cbd5e1;
          font-size: 12px;
          font-weight: 700;
        }
        .charges-range-empty {
          text-align: center;
          color: #e2e8f0 !important;
          font-size: 12px !important;
          font-weight: 850 !important;
        }
        @media (max-width: 1200px) {
          .charges-header,
          .charges-hero,
          .charges-main-grid {
            grid-template-columns: 1fr;
          }
          .charges-header {
            align-items: stretch;
          }
          .charges-stat-row {
            min-width: 0;
          }
        }
        @media (max-width: 720px) {
          .charges-setting-page {
            padding: 12px;
          }
          .charges-header,
          .charges-hero,
          .charges-panel {
            padding: 16px;
          }
          .charges-stat-row,
          .charges-info-grid,
          .charges-form-grid,
          .charges-result-grid,
          .charges-preview-top {
            grid-template-columns: 1fr;
          }
          .charges-heading {
            font-size: 19px;
          }
          .charges-panel-head {
            flex-direction: column;
          }
          .charges-btn {
            width: 100%;
          }
          .charges-range-head {
            flex-direction: column;
            padding: 18px 16px 8px;
          }
          .charges-range-actions,
          .charges-range-add {
            width: 100%;
          }
          .charges-range-form-grid {
            grid-template-columns: 1fr;
          }
          .charges-range-form-footer {
            flex-direction: column-reverse;
          }
          .charges-range-cancel,
          .charges-range-save {
            width: 100%;
          }
          .charges-range-body {
            padding: 8px 16px 60px;
            overflow-x: auto;
          }
          .charges-range-table {
            min-width: 760px;
          }
        }
      `}</style>

      {rangeError && (
        <div className="charges-toast-error" role="alert">
          {rangeError}
        </div>
      )}

      <div className="charges-shell">
        <section className="charges-card charges-header">
          <div>
            <h1 className="charges-title">Admin Charge Setting</h1>
            <p className="charges-subtitle">Supported services: <b>Pay In, Pay Out</b> &nbsp;&nbsp; Charge rules can be configured globally for every transaction</p>
          </div>
          <div className="charges-stat-row">
            <div className="charges-stat">
              <span className="charges-stat-label">Default Rules</span>
              <span className="charges-stat-value">22</span>
            </div>
            <div className="charges-stat">
              <span className="charges-stat-label">User Overrides</span>
              <span className="charges-stat-value">0</span>
            </div>
            <div className="charges-stat">
              <span className="charges-stat-label">Users</span>
              <span className="charges-stat-value">{usersCount}</span>
            </div>
          </div>
        </section>

        <nav className="charges-tabs" aria-label="Charge setting sections">
          {Object.entries(serviceContent).map(([service, item]) => (
            <button
              key={service}
              type="button"
              className={`charges-tab${activeService === service ? ' active' : ''}`}
              onClick={() => setActiveService(service)}
            >
              {item.tab}
            </button>
          ))}
        </nav>

        <section className="charges-card charges-hero">
          <div>
            <span className="charges-kicker">{content.kicker}</span>
            <span className="charges-pill">GLOBAL</span>
            <h2 className="charges-heading">{content.title}</h2>
            <p className="charges-copy">{content.copy}</p>
            <div className="charges-meta">
              <span>Current mode: <b>{mode}</b></span>
              <span>Active ranges: <b>0</b></span>
              <span>Current rule: <b>{formatINR(charge)}</b></span>
            </div>
          </div>
          <div className="charges-info-grid">
            <div className="charges-info-box">
              <span className="charges-kicker">Mode</span>
              <div className="charges-info-value">{mode}</div>
            </div>
            <div className="charges-info-box">
              <span className="charges-kicker">Profile</span>
              <div className="charges-info-value">{status}</div>
            </div>
            <div className="charges-info-box">
              <span className="charges-kicker">Rule Snapshot</span>
              <div className="charges-info-value">{activeService} global rule</div>
            </div>
          </div>
        </section>

        <div className="charges-main-grid">
          <section className="charges-card charges-panel">
            <div className="charges-panel-head">
              <div>
                <h3 className="charges-panel-title">{content.profileTitle}</h3>
                <p className="charges-panel-sub">{content.profileSub}</p>
              </div>
              <button type="button" className="charges-btn" onClick={handleProfileAction}>
                {isFormLocked ? <Edit3 size={14} strokeWidth={2.5} /> : <Play size={14} fill="currentColor" strokeWidth={2.5} />}
                {isFormLocked ? 'Edit Profile' : 'Save Profile'}
              </button>
            </div>

            <div className="charges-form-grid">
              <label className="charges-field">
                <span className="charges-field-label">Mode</span>
                <select className="charges-select" value={mode} onChange={(event) => setMode(event.target.value)} disabled={isFormLocked}>
                  <option>Fixed</option>
                  <option>Dynamic</option>
                </select>
              </label>
              <label className="charges-field">
                <span className="charges-field-label">Status</span>
                <select className="charges-select" value={status} onChange={(event) => setStatus(event.target.value)} disabled={isFormLocked}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </label>
              {!isDynamicMode && (
                <>
                  <label className="charges-field">
                    <span className="charges-field-label">Fixed Rate Type</span>
                    <select className="charges-select" value={rateType} onChange={(event) => setRateType(event.target.value)} disabled={isFormLocked}>
                      <option>Flat Fee</option>
                      <option>Percentage</option>
                    </select>
                  </label>
                  <label className="charges-field">
                    <span className="charges-field-label">Rate Value</span>
                    <input className="charges-input" type="number" min="0" step="0.01" value={rateValue} onChange={(event) => setRateValue(event.target.value)} disabled={isFormLocked} />
                  </label>
                </>
              )}
            </div>

            <div className="charges-note">{note}</div>

            {!isFormLocked && (
              <div className="charges-actions">
                <button
                  type="button"
                  className="charges-cancel"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            )}
          </section>

          <section className="charges-card charges-panel">
            <div className="charges-panel-head">
              <div>
                <h3 className="charges-panel-title">{content.previewTitle}</h3>
                <p className="charges-panel-sub">{content.previewSub}</p>
              </div>
              <span className="charges-live"><Calculator size={13} />Live Preview</span>
            </div>

            <label className="charges-field">
              <span className="charges-field-label">{content.amountLabel}</span>
              <div className="charges-preview-top">
                <input className="charges-input" type="number" min="0" step="0.01" value={previewAmount} onChange={(event) => setPreviewAmount(event.target.value)} />
                <button type="button" className="charges-btn" onClick={handlePreviewCharge}>
                  <Save size={14} />
                  Preview Charge
                </button>
              </div>
            </label>

            <div className="charges-result-grid">
              <div className="charges-result">
                <span className="charges-preview-label">{content.requestedLabel}</span>
                <strong>{formatINR(preview.amount)}</strong>
              </div>
              <div className="charges-result">
                <span className="charges-preview-label">{activeService} Charge</span>
                <strong>{formatINR(preview.charge)}</strong>
              </div>
              <div className="charges-result">
                <span className="charges-preview-label">{content.netLabel}</span>
                <strong>{formatINR(preview.netPayout)}</strong>
              </div>
              <div className="charges-result">
                <span className="charges-preview-label">Rule</span>
                <strong>{preview.rule}</strong>
              </div>
            </div>
          </section>
        </div>

        <section className="charges-range-card">
          <div className="charges-range-head">
            <div>
              <h3 className="charges-range-title">{content.rangeTitle}</h3>
              <p className="charges-range-sub">{content.rangeSubtitle}</p>
            </div>
            <div className="charges-range-actions">
              <span className="charges-range-count">{activeRanges.length} range(s)</span>
              <button
                type="button"
                className="charges-range-add"
                onClick={handleOpenRangeForm}
                disabled={!isDynamicMode}
                title={isDynamicMode ? 'Add range' : 'Set global profile mode to Dynamic first'}
              >
                <Plus size={16} strokeWidth={3} />
                Add Range
              </button>
            </div>
          </div>
          <div className="charges-range-body">
            {!isDynamicMode && (
              <div className="charges-range-notice">{content.rangeNotice}</div>
            )}
            {rangeFormOpen && (
              <div className="charges-range-form">
                <div className="charges-range-form-grid">
                  <label className="charges-range-field">
                    <span className="charges-range-label">Minimum Amount</span>
                    <input
                      className="charges-range-input"
                      type="number"
                      min="0"
                      step="0.01"
                      value={rangeDraft.minAmount}
                      onChange={(event) => handleRangeChange('minAmount', event.target.value)}
                    />
                  </label>
                  <label className="charges-range-field">
                    <span className="charges-range-label">Maximum Amount</span>
                    <input
                      className="charges-range-input"
                      type="number"
                      min="0"
                      step="0.01"
                      value={rangeDraft.maxAmount}
                      onChange={(event) => handleRangeChange('maxAmount', event.target.value)}
                    />
                  </label>
                  <label className="charges-range-field">
                    <span className="charges-range-label">Rate Type</span>
                    <select
                      className="charges-range-select"
                      value={rangeDraft.rateType}
                      onChange={(event) => handleRangeChange('rateType', event.target.value)}
                    >
                      <option>Percentage</option>
                      <option>Flat Fee</option>
                    </select>
                  </label>
                  <label className="charges-range-field">
                    <span className="charges-range-label">Rate Value</span>
                    <input
                      className="charges-range-input"
                      type="number"
                      min="0"
                      step="0.01"
                      value={rangeDraft.rateValue}
                      onChange={(event) => handleRangeChange('rateValue', event.target.value)}
                    />
                  </label>
                  <label className="charges-range-field">
                    <span className="charges-range-label">Sort Order</span>
                    <input
                      className="charges-range-input"
                      type="number"
                      min="0"
                      step="1"
                      value={rangeDraft.sortOrder}
                      onChange={(event) => handleRangeChange('sortOrder', event.target.value)}
                    />
                  </label>
                  <label className="charges-range-field">
                    <span className="charges-range-label">Status</span>
                    <select
                      className="charges-range-select"
                      value={rangeDraft.status}
                      onChange={(event) => handleRangeChange('status', event.target.value)}
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </label>
                </div>
                <div className="charges-range-form-footer">
                  <button type="button" className="charges-range-cancel" onClick={handleCancelRange}>
                    Cancel
                  </button>
                  <button type="button" className="charges-range-save" onClick={handleSaveRange}>
                    Save Range
                  </button>
                </div>
              </div>
            )}
            <table className="charges-range-table">
              <thead>
                <tr>
                  <th>Min Amount</th>
                  <th>Max Amount</th>
                  <th>Rate Type</th>
                  <th>Rate Value</th>
                  <th>Sort Order</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeRanges.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="charges-range-empty">{content.emptyRanges}</td>
                  </tr>
                ) : (
                  activeRanges.map((range) => (
                    <tr key={range.id}>
                      <td>{formatINR(range.minAmount)}</td>
                      <td>{formatINR(range.maxAmount)}</td>
                      <td>{range.rateType}</td>
                      <td>{range.rateType === 'Percentage' ? `${range.rateValue}%` : formatINR(range.rateValue)}</td>
                      <td>{range.sortOrder}</td>
                      <td><span className="charges-range-status">{range.status}</span></td>
                      <td>-</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
