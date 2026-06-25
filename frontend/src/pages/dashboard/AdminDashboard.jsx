import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChargesSettingPage from './ChargesSettingPage';
import { 
  LayoutGrid, 
  Users, 
  ArrowUpDown, 
  Sliders, 
  LogOut, 
  Check, 
  X, 
  TrendingUp, 
  ShieldAlert, 
  UserCheck, 
  IndianRupee,
  Activity,
  Plus,
  RotateCw,
  LogIn,
  Edit3,
  Wallet,
  ChevronDown,
  ArrowLeft,
  Eye,
  EyeOff,
  Search
} from 'lucide-react';

const translations = {
  English: {
    adminDashboard: "Admin Dashboard",
    apiPartners: "API Partner",
    overview: "Overview",
    merchants: "Merchants",
    approvals: "Withdrawal Approvals",
    settings: "Account Setting",
    logout: "Logout",
    welcomeAdmin: "Welcome, Administrator",
    systemControl: "Control panel for payment gateway operations",
    totalSystemDeposits: "Total System Deposits",
    pendingApprovals: "Pending Approvals",
    totalPlatformEarnings: "Total Platform Earnings (10%)",
    activeMerchantsCount: "Active Merchants",
    allMerchants: "Registered Merchants",
    merchantName: "Merchant Name",
    merchantId: "Merchant ID",
    merchantStatus: "Status",
    merchantBalance: "Available Balance",
    merchantActions: "Actions",
    active: "Active",
    suspended: "Suspended",
    approveBtn: "Approve",
    rejectBtn: "Reject",
    suspendBtn: "Suspend",
    activateBtn: "Activate",
    withdrawalRequests: "Withdrawal Queue",
    noPendingRequests: "No pending withdrawal requests",
    id: "ID",
    amount: "Amount",
    address: "TRC20 USDT Address",
    date: "Date",
    txHash: "TX Hash",
    platformConfig: "Platform Configuration",
    platformFeeRate: "Platform Fee Rate (%)",
    minDepositLimit: "Minimum Deposit Warning Text",
    saveConfig: "Save Configuration",
    chargesSet: "Charges Set",
    configSuccess: "System settings updated successfully!",
    authGoogle: "Google Auth Status",
    secEnabled: "Security: High",
    txSuccessMsg: "Withdrawal approved! Transaction hash generated.",
    txRejectMsg: "Withdrawal rejected.",
    transactions: "Transactions",
    txId: "Transaction ID",
    txMerchant: "Merchant",
    txType: "Type",
    txAmount: "Amount",
    txStatus: "Status",
    txDate: "Date",
    txGateway: "Gateway",
    txSearch: "Search transactions...",
    txAllStatus: "All Status",
    txSuccess: "Success",
    txFailed: "Failed",
    txPending: "Pending",
    txRefunded: "Refunded",
  },
  中文: {
    adminDashboard: "管理员控制台",
    apiPartners: "API 合作伙伴",
    overview: "概览",
    merchants: "商户管理",
    approvals: "提现审核",
    settings: "账户设置",
    logout: "退出登录",
    welcomeAdmin: "欢迎，系统管理员",
    systemControl: "支付网关业务运营控制台",
    totalSystemDeposits: "系统总充值金额",
    pendingApprovals: "待审核提现",
    totalPlatformEarnings: "平台收益总额 (10%)",
    activeMerchantsCount: "活跃商户数",
    allMerchants: "注册商户列表",
    merchantName: "商户名称",
    merchantId: "商户 ID",
    merchantStatus: "状态",
    merchantBalance: "可用余额",
    merchantActions: "操作",
    active: "已启用",
    suspended: "已停用",
    approveBtn: "同意",
    rejectBtn: "拒绝",
    suspendBtn: "停用",
    activateBtn: "启用",
    withdrawalRequests: "提现队列",
    noPendingRequests: "暂无等待审核的提现申请",
    id: "序号",
    amount: "金额",
    address: "波场泰达币地址",
    date: "日期",
    txHash: "交易哈希",
    platformConfig: "平台核心配置",
    platformFeeRate: "平台手续费比率 (%)",
    minDepositLimit: "最低充值警告文本",
    saveConfig: "保存系统配置",
    chargesSet: "名称",
    configSuccess: "系统设置更新成功！",
    authGoogle: "谷歌验证状态",
    secEnabled: "安全级别：极高",
    txSuccessMsg: "提现已批准！交易哈希已生成。",
    txRejectMsg: "提现已被拒绝。",
    transactions: "交易记录",
    txId: "交易编号",
    txMerchant: "商户",
    txType: "类型",
    txAmount: "金额",
    txStatus: "状态",
    txDate: "日期",
    txGateway: "支付通道",
    txSearch: "搜索交易...",
    txAllStatus: "全部状态",
    txSuccess: "成功",
    txFailed: "失败",
    txPending: "待处理",
    txRefunded: "已退款",
    language: "语言",
  }
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [language, setLanguage] = useState('English');

  const t = (key) => {
    return translations[language]?.[key] || translations['English']?.[key] || key;
  };

  // API Partners state with mock data matching screenshots
  const defaultPartners = [
    {
      id: 4,
      name: "viral",
      email: "viral.c.nandu@gmail.com",
      mobile: "9653229033",
      clientOutletId: "615523",
      activeServices: ["pay in", "pay out"],
      walletBalance: 0.00,
      holdBalance: 0.00,
      status: "Active",
      gender: "Male",
      dob: "1995-08-12",
      city: "Mumbai",
      district: "Mumbai Suburban",
      pincode: "400001",
      state: "Maharashtra",
      country: "India",
      settlementType: "Not set"
    },
    {
      id: 3,
      name: "FINIPM",
      email: "tech@finipm.com",
      mobile: "8192822150",
      clientOutletId: "",
      activeServices: ["pay in"],
      walletBalance: 38413101.48,
      holdBalance: 450039.04,
      status: "Active",
      gender: "Male",
      dob: "1992-04-20",
      city: "Bangalore",
      district: "Bangalore Urban",
      pincode: "560001",
      state: "Karnataka",
      country: "India",
      settlementType: "Not set"
    },
    {
      id: 2,
      name: "Mukund Kumar",
      email: "mukundkumarkmi@gmail.com",
      mobile: "8986423647",
      clientOutletId: "487782",
      activeServices: ["pay in", "pay out"],
      walletBalance: 216.22,
      holdBalance: 0.00,
      status: "Active",
      gender: "Male",
      dob: "1998-11-05",
      city: "Patna",
      district: "Patna",
      pincode: "800001",
      state: "Bihar",
      country: "India",
      settlementType: "Not set"
    }
  ];

  const [apiPartners, setApiPartners] = useState(() => {
    try {
      const stored = localStorage.getItem('payzo_api_partners');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultPartners;
  });

  const [partnerSubTab, setPartnerSubTab] = useState('list'); // 'list', 'create', 'edit'
  const [editingPartner, setEditingPartner] = useState(null);
  const [partnerSearchQuery, setPartnerSearchQuery] = useState('');
  const [openServicesDropdownPartnerId, setOpenServicesDropdownPartnerId] = useState(null);

  // Form inputs state variables
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMobile, setFormMobile] = useState('');
  const [formUsername, setFormUsername] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [chargesName, setChargesName] = useState('');
  const [showFormPassword, setShowFormPassword] = useState(false);
  const [formGender, setFormGender] = useState('Male');
  const [formDob, setFormDob] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formDistrict, setFormDistrict] = useState('');
  const [formPincode, setFormPincode] = useState('');
  const [formState, setFormState] = useState('');
  const [formCountry, setFormCountry] = useState('India');
  const [formSettlementType, setFormSettlementType] = useState('Not set');
  const [formClientOutletId, setFormClientOutletId] = useState('');

  // Wallet Adjustment state variables
  const [selectedPartnerForWallet, setSelectedPartnerForWallet] = useState(null);
  const [walletAdjustmentAction, setWalletAdjustmentAction] = useState('Credit'); // 'Credit' or 'Debit'
  const [walletAdjustmentType, setWalletAdjustmentType] = useState('Main Wallet'); // 'Main Wallet' or 'Hold Wallet'
  const [walletAmount, setWalletAmount] = useState('');
  const [walletAccount, setWalletAccount] = useState('');
  const [walletIfsc, setWalletIfsc] = useState('');
  const [walletRemark, setWalletRemark] = useState('');

  // Admin interactive state variables
  const [feeRate, setFeeRate] = useState(10.00);
  const [minDepositText, setMinDepositText] = useState("Minimum deposit ₹200.00, use only your Merchant id and input key for API signing.");
  const [isConfigSaved, setIsConfigSaved] = useState(false);
  // Platform fee — admin-managed via DB
  const [dbFeePercent, setDbFeePercent] = useState('10.00');
  const [feeUpdateLoading, setFeeUpdateLoading] = useState(false);
  const [feeUpdateMsg, setFeeUpdateMsg] = useState('');
  const ADMIN_KEY = import.meta.env.VITE_ADMIN_API_KEY || 'payzo_admin_secret_key_9983';

  const fetchPartnersFromDb = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/admin/clients', {
        headers: { 'x-admin-key': ADMIN_KEY }
      });
      const data = await res.json();
      if (data.success && data.clients) {
        const mapped = data.clients.map(c => ({
          id: c.id,
          name: c.client_name,
          username: c.login_username,
          email: c.email || '',
          mobile: c.mobile || '',
          clientOutletId: c.client_outlet_id,
          activeServices: c.active_services || ['pay in', 'pay out'],
          walletBalance: parseFloat(c.wallet_balance || 0),
          holdBalance: parseFloat(c.hold_balance || 0),
          status: c.is_active ? 'Active' : 'Inactive',
          gender: c.gender || 'Male',
          dob: c.dob || '',
          city: c.city || '',
          state: c.state || '',
          xClientId: c.x_client_id
        }));
        setApiPartners(mapped);
        localStorage.setItem('payzo_api_partners', JSON.stringify(mapped));
      }
    } catch (err) {
      console.error('Error fetching clients from DB:', err);
    }
  };

  // Fetch current platform fee from DB on load
  useEffect(() => {
    fetch('http://localhost:4000/api/v1/admin/settings', { headers: { 'x-admin-key': ADMIN_KEY } })
      .then(r => r.json())
      .then(data => {
        if (data.success && data.settings?.platform_fee_percent) {
          const fee = data.settings.platform_fee_percent.value;
          setDbFeePercent(String(fee));
          setFeeRate(parseFloat(fee));
        }
      })
      .catch(() => {});

    fetchPartnersFromDb();
  }, []);

  const handleSavePlatformFee = async (e) => {
    e.preventDefault();
    const num = parseFloat(dbFeePercent);
    if (isNaN(num) || num < 0 || num > 100) {
      setFeeUpdateMsg('❌ Invalid: Enter a number between 0 and 100.');
      setTimeout(() => setFeeUpdateMsg(''), 3000);
      return;
    }
    setFeeUpdateLoading(true);
    try {
      const res = await fetch('http://localhost:4000/api/v1/admin/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
        body: JSON.stringify({ key: 'platform_fee_percent', value: num.toFixed(2), updatedBy: 'admin' })
      });
      const data = await res.json();
      if (data.success) {
        setFeeRate(num);
        setFeeUpdateMsg(`✅ Platform fee updated to ${num.toFixed(2)}% — applies to all future transactions.`);
        setToastMessage(`Platform fee changed to ${num.toFixed(2)}%`);
        setTimeout(() => setToastMessage(''), 3000);
      } else {
        setFeeUpdateMsg('❌ Failed: ' + data.message);
      }
    } catch (err) {
      setFeeUpdateMsg('❌ Backend unreachable. Fee not saved.');
    } finally {
      setFeeUpdateLoading(false);
      setTimeout(() => setFeeUpdateMsg(''), 6000);
    }
  };

  // Success toast message
  const [toastMessage, setToastMessage] = useState('');


  // Merchants list state (Reverted to local static mock data)
  const [merchants, setMerchants] = useState([
    { id: 1, name: "Prahlad Sir Merchant", username: "prahlad3311", merchantId: "m_1719602492dcebf73b", balance: 1450000.00, status: "Active" },
    { id: 2, name: "Alok Kumar", username: "alok9982", merchantId: "m_1719602492dcebf73c", balance: 25000.00, status: "Active" },
    { id: 3, name: "Ravi Verma", username: "ravi_v", merchantId: "m_1719602492dcebf73d", balance: 0.00, status: "Suspended" }
  ]);

  // Withdrawal Requests queue state
  const [withdrawalQueue, setWithdrawalQueue] = useState([
    { id: "100004", merchant: "Prahlad Sir Merchant", amount: 20000.00, usdt: "222.22", address: "TKK3u9qP1Hj4b7GeiX9h8uWd12LzJ98aK", status: "Pending", txHash: "", date: "16/06/2026 13:42" },
    { id: "100005", merchant: "Prahlad Sir Merchant", amount: 15000.00, usdt: "166.67", address: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb", status: "Pending", txHash: "", date: "16/06/2026 14:15" },
    { id: "100003", merchant: "Prahlad Sir Merchant", amount: 8000.00, usdt: "88.89", address: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb", status: "Approved", txHash: "0x8192fbbfcd3819283ae012b1c2d9a3b7eef4190c", date: "15/06/2026 18:22" }
  ]);
  
  // Real transactions for total deposits
  const [allTransactions, setAllTransactions] = useState([
    { id: 1, type: "collection", status: "success", amount: 1500000.00 },
    { id: 2, type: "collection", status: "success", amount: 25000.00 }
  ]);

  // Transactions tab data
  const [transactions] = useState([
    { id: "TXN100091", merchant: "Prahlad Sir Merchant", type: "Pay In",  amount: 50000.00,  status: "Success",  gateway: "UPI",       date: "17/06/2026 09:12" },
    { id: "TXN100090", merchant: "FINIPM",               type: "Pay Out", amount: 12500.00,  status: "Success",  gateway: "IMPS",      date: "17/06/2026 08:44" },
    { id: "TXN100089", merchant: "Alok Kumar",           type: "Pay In",  amount: 8000.00,   status: "Pending",  gateway: "UPI",       date: "17/06/2026 08:30" },
    { id: "TXN100088", merchant: "Mukund Kumar",         type: "Pay Out", amount: 3500.00,   status: "Failed",   gateway: "NEFT",      date: "16/06/2026 22:15" },
    { id: "TXN100087", merchant: "FINIPM",               type: "Pay In",  amount: 250000.00, status: "Success",  gateway: "QR Code",   date: "16/06/2026 19:05" },
    { id: "TXN100086", merchant: "viral",                type: "Pay In",  amount: 15000.00,  status: "Success",  gateway: "UPI",       date: "16/06/2026 17:33" },
    { id: "TXN100085", merchant: "Prahlad Sir Merchant", type: "Pay Out", amount: 20000.00,  status: "Success",  gateway: "RTGS",      date: "16/06/2026 15:10" },
    { id: "TXN100084", merchant: "Ravi Verma",           type: "Pay In",  amount: 5000.00,   status: "Refunded", gateway: "UPI",       date: "16/06/2026 12:45" },
    { id: "TXN100083", merchant: "Alok Kumar",           type: "Pay In",  amount: 18000.00,  status: "Success",  gateway: "QR Code",   date: "16/06/2026 10:22" },
    { id: "TXN100082", merchant: "FINIPM",               type: "Pay Out", amount: 75000.00,  status: "Pending",  gateway: "IMPS",      date: "15/06/2026 23:58" },
  ]);
  const [txSearch, setTxSearch] = useState('');
  const [txStatusFilter, setTxStatusFilter] = useState('All');
  const [txTypeFilter, setTxTypeFilter] = useState('All');
  const [txRows, setTxRows] = useState(20);
  const [txRowsInput, setTxRowsInput] = useState('20');
  const [txAppliedSearch, setTxAppliedSearch] = useState('');
  const [txAppliedStatus, setTxAppliedStatus] = useState('All');
  const [txAppliedType, setTxAppliedType] = useState('All');

  // Account Setting sub-tabs
  const [settingSubTab, setSettingSubTab] = useState('personal');
  // Account Setting form state
  const [adminFullName, setAdminFullName] = useState(() => {
    return localStorage.getItem('admin_fullname') || 'Development Admin';
  });
  const [adminUsername] = useState('admin');
  const [adminEmail] = useState('admin@payzo.com');
  const [adminMobile, setAdminMobile] = useState(() => {
    return localStorage.getItem('admin_mobile') || '9000000000';
  });
  const [adminBillingAddr, setAdminBillingAddr] = useState(() => {
    try {
      const stored = localStorage.getItem('admin_billing_addr');
      return stored ? JSON.parse(stored) : { gst: '', company: '', address: 'Patna, Patna', country: 'India', state: 'Bihar', city: 'Patna', district: 'Patna', pincode: '800001' };
    } catch (e) {
      return { gst: '', company: '', address: 'Patna, Patna', country: 'India', state: 'Bihar', city: 'Patna', district: 'Patna', pincode: '800001' };
    }
  });
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newMobile, setNewMobile] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [apiServices, setApiServices] = useState(() => {
    try {
      const stored = localStorage.getItem('admin_api_services');
      return stored ? JSON.parse(stored) : [
        { id: 1, name: 'Pay In API',  desc: 'Payment collection via UPI & Cards', active: true },
        { id: 2, name: 'Pay Out API', desc: 'Payouts via IMPS, NEFT & RTGS',     active: true },
      ];
    } catch (e) {
      return [
        { id: 1, name: 'Pay In API',  desc: 'Payment collection via UPI & Cards', active: true },
        { id: 2, name: 'Pay Out API', desc: 'Payouts via IMPS, NEFT & RTGS',     active: true },
      ];
    }
  });
  const [editingApiId, setEditingApiId] = useState(null);
  const [editingApiName, setEditingApiName] = useState('');
  const [editingApiDesc, setEditingApiDesc] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [createdCredentials, setCreatedCredentials] = useState(null); // { loginUsername, loginPassword, xClientId, xClientPassword }
  const [showAddApi, setShowAddApi] = useState(false);
  const [newApiName, setNewApiName] = useState('');
  const [newApiDesc, setNewApiDesc] = useState('');
  const [adminBankAccounts, setAdminBankAccounts] = useState(() => {
    try {
      const stored = localStorage.getItem('admin_bank_accounts');
      return stored ? JSON.parse(stored) : [
        { id: 1, bankName: 'State Bank of India', accountNo: '30219482716', ifsc: 'SBIN0000123', holderName: 'Payzo Solutions Pvt Ltd', active: true },
        { id: 2, bankName: 'HDFC Bank', accountNo: '50100482910392', ifsc: 'HDFC0000060', holderName: 'Payzo Solutions Pvt Ltd', active: true }
      ];
    } catch (e) {
      return [
        { id: 1, bankName: 'State Bank of India', accountNo: '30219482716', ifsc: 'SBIN0000123', holderName: 'Payzo Solutions Pvt Ltd', active: true },
        { id: 2, bankName: 'HDFC Bank', accountNo: '50100482910392', ifsc: 'HDFC0000060', holderName: 'Payzo Solutions Pvt Ltd', active: true }
      ];
    }
  });
  const [showAddBank, setShowAddBank] = useState(false);
  const [newBankForm, setNewBankForm] = useState({ bankName: '', accountNo: '', ifsc: '', holderName: '' });


  // Handle Logout
  const handleLogout = () => {
    navigate('/login');
  };

  // Toggle merchant status
  const handleToggleMerchantStatus = (id) => {
    setMerchants(prev => prev.map(m => {
      if (m.id === id) {
        const nextStatus = m.status === 'Active' ? 'Suspended' : 'Active';
        setToastMessage(`Merchant status updated to ${nextStatus}`);
        setTimeout(() => setToastMessage(''), 3000);
        return { ...m, status: nextStatus };
      }
      return m;
    }));
  };

  // Approve withdrawal
  const handleApproveWithdrawal = (id) => {
    const mockHash = '0x' + Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join('');
    setWithdrawalQueue(prev => prev.map(w => {
      if (w.id === id) {
        setToastMessage(t('txSuccessMsg'));
        setTimeout(() => setToastMessage(''), 3000);
        return { ...w, status: 'Approved', txHash: mockHash };
      }
      return w;
    }));
  };

  // Reject withdrawal
  const handleRejectWithdrawal = (id) => {
    setWithdrawalQueue(prev => prev.map(w => {
      if (w.id === id) {
        setToastMessage(t('txRejectMsg'));
        setTimeout(() => setToastMessage(''), 3000);
        return { ...w, status: 'Rejected' };
      }
      return w;
    }));
  };

  // Open Create API Partner Form
  const handleOpenCreatePartner = () => {
    setFormName('');
    setFormEmail('');
    setFormMobile('');
    setFormUsername('');
    setFormPassword('');
    setShowFormPassword(false);
    setFormGender('Male');
    setFormDob('');
    setFormCity('');
    setFormDistrict('');
    setFormPincode('');
    setFormState('');
    setFormCountry('India');
    setFormSettlementType('Not set');
    setFormClientOutletId('');
    setEditingPartner(null);
    setPartnerSubTab('create');
  };

  // Open Edit API Partner Form
  const handleOpenEditPartner = (partner) => {
    setFormName(partner.name || '');
    setFormEmail(partner.email || '');
    setFormMobile(partner.mobile || '');
    setFormUsername(partner.username || '');
    setFormPassword('');
    setShowFormPassword(false);
    setFormGender(partner.gender || 'Male');
    setFormDob(partner.dob || '');
    setFormCity(partner.city || '');
    setFormDistrict(partner.district || '');
    setFormPincode(partner.pincode || '');
    setFormState(partner.state || '');
    setFormCountry(partner.country || 'India');
    setFormSettlementType(partner.settlementType || 'Not set');
    setFormClientOutletId(partner.clientOutletId || '');
    setEditingPartner(partner);
    setPartnerSubTab('edit');
  };

  // Save/Create Partner - calls backend API to store in DB
  const handleSavePartner = async (e) => {
    e.preventDefault();
    const ADMIN_KEY = 'payzo_admin_secret_key_9983';
    if (partnerSubTab === 'create') {
      const newId = Math.max(...apiPartners.map(p => p.id), 0) + 1;
      const partnerUsername = formUsername.trim() || (formName.toLowerCase().replace(/\s+/g, '_') + newId);
      const apiPassword = 'api_' + Date.now();
      try {
        const res = await fetch('http://localhost:4000/api/v1/admin/clients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
          body: JSON.stringify({
            clientName: formName, clientPassword: apiPassword,
            email: formEmail, mobile: formMobile,
            loginUsername: partnerUsername, loginPassword: formPassword || 'Partner@123',
            gender: formGender, dob: formDob, city: formCity, district: formDistrict,
            pincode: formPincode, state: formState, country: formCountry,
            settlementType: formSettlementType, clientOutletId: formClientOutletId
          })
        });
        const data = await res.json();
        if (data.success) {
          setToastMessage('Partner created and saved to database!');
          fetchPartnersFromDb();
        } else { alert('Error: ' + (data.message || 'Failed.')); return; }
      } catch (err) {
        const storedCreds = JSON.parse(localStorage.getItem('payzo_partner_creds') || '{}');
        storedCreds[partnerUsername] = { password: formPassword || 'Partner@123', partnerId: newId, name: formName };
        localStorage.setItem('payzo_partner_creds', JSON.stringify(storedCreds));
        const newPartner = { id: newId, name: formName, username: partnerUsername, email: formEmail, mobile: formMobile,
          clientOutletId: formClientOutletId || ('m_outlet_' + newId), activeServices: ['pay in','pay out'],
          walletBalance: 0, holdBalance: 0, status: 'Active', gender: formGender, dob: formDob,
          city: formCity, district: formDistrict, pincode: formPincode, state: formState, country: formCountry, settlementType: formSettlementType };
        const updatedPartners = [newPartner, ...apiPartners];
        setApiPartners(updatedPartners);
        localStorage.setItem('payzo_api_partners', JSON.stringify(updatedPartners));
        setCreatedCredentials({ name: formName, loginUsername: partnerUsername, loginPassword: formPassword || 'Partner@123', xClientId: 'N/A', xClientPassword: 'N/A', clientOutletId: formClientOutletId || 'm_outlet_' + newId });
        setToastMessage('Partner saved locally (backend offline).');
      }
    } else if (partnerSubTab === 'edit' && editingPartner) {
      try {
        const res = await fetch(`http://localhost:4000/api/v1/admin/clients/${editingPartner.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
          body: JSON.stringify({
            clientName: formName,
            email: formEmail,
            mobile: formMobile,
            loginUsername: formUsername.trim(),
            loginPassword: formPassword || undefined,
            gender: formGender,
            dob: formDob,
            city: formCity,
            district: formDistrict,
            pincode: formPincode,
            state: formState,
            country: formCountry,
            settlementType: formSettlementType,
            clientOutletId: formClientOutletId
          })
        });
        const data = await res.json();
        if (data.success) {
          setToastMessage('API Partner updated in database successfully!');
          fetchPartnersFromDb();
        } else {
          alert('Error: ' + (data.message || 'Failed.'));
          return;
        }
      } catch (err) {
        console.error('Error updating partner on database:', err);
        const updatedPartners = apiPartners.map(p => {
          if (p.id === editingPartner.id) {
            return { ...p, name: formName, email: formEmail, mobile: formMobile, clientOutletId: formClientOutletId,
              username: formUsername.trim() || p.username,
              gender: formGender, dob: formDob, city: formCity, district: formDistrict,
              pincode: formPincode, state: formState, country: formCountry, settlementType: formSettlementType };
          }
          return p;
        });
        setApiPartners(updatedPartners);
        localStorage.setItem('payzo_api_partners', JSON.stringify(updatedPartners));
        setToastMessage('API Partner updated locally (backend offline).');
      }
    }
    setTimeout(() => setToastMessage(''), 5000);
    setPartnerSubTab('list');
  };

  // Toggle API Partner Active/Inactive status
  const handleTogglePartnerStatus = async (id) => {
    const partner = apiPartners.find(p => p.id === id);
    if (!partner) return;
    const newIsActive = partner.status !== 'Active';
    try {
      const res = await fetch(`http://localhost:4000/api/v1/admin/clients/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
        body: JSON.stringify({ isActive: newIsActive })
      });
      const data = await res.json();
      if (data.success) {
        setToastMessage(`API Partner status updated to ${newIsActive ? 'Active' : 'Inactive'}`);
        fetchPartnersFromDb();
      } else {
        alert('Error updating status: ' + (data.message || 'Failed.'));
      }
    } catch (err) {
      console.error('Error toggling status on DB:', err);
      setApiPartners(prev => prev.map(p => {
        if (p.id === id) {
          const nextStatus = p.status === 'Active' ? 'Inactive' : 'Active';
          return { ...p, status: nextStatus };
        }
        return p;
      }));
      setToastMessage('API Partner status updated locally.');
    }
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Toggle specific services from dropdown checkboxes
  const handleToggleService = (partnerId, serviceName) => {
    setApiPartners(prev => prev.map(p => {
      if (p.id === partnerId) {
        const hasService = p.activeServices.includes(serviceName);
        const nextServices = hasService
          ? p.activeServices.filter(s => s !== serviceName)
          : [...p.activeServices, serviceName];
        return { ...p, activeServices: nextServices };
      }
      return p;
    }));
  };

  // Submit wallet adjustment credit/debit
  const handleWalletAdjustmentSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPartnerForWallet) return;
    const amountNum = parseFloat(walletAmount || '0');
    if (isNaN(amountNum) || amountNum <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    try {
      const res = await fetch(`http://localhost:4000/api/v1/admin/clients/${selectedPartnerForWallet.id}/wallet`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
        body: JSON.stringify({
          action: walletAdjustmentAction,
          walletType: walletAdjustmentType,
          amount: amountNum
        })
      });
      const data = await res.json();
      if (data.success) {
        setToastMessage(`Wallet successfully ${walletAdjustmentAction === 'Credit' ? 'credited' : 'debited'} with ₹${amountNum.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`);
        fetchPartnersFromDb();
      } else {
        alert('Error adjusting wallet: ' + (data.message || 'Failed.'));
      }
    } catch (err) {
      console.error('Error adjusting wallet on DB:', err);
      setApiPartners(prev => prev.map(p => {
        if (p.id === selectedPartnerForWallet.id) {
          if (walletAdjustmentType === 'Main Wallet') {
            const updatedBalance = walletAdjustmentAction === 'Credit'
              ? p.walletBalance + amountNum
              : Math.max(0, p.walletBalance - amountNum);
            return { ...p, walletBalance: updatedBalance };
          } else {
            const updatedHold = walletAdjustmentAction === 'Credit'
              ? p.holdBalance + amountNum
              : Math.max(0, p.holdBalance - amountNum);
            return { ...p, holdBalance: updatedHold };
          }
        }
        return p;
      }));
      setToastMessage(`Wallet successfully ${walletAdjustmentAction === 'Credit' ? 'credited' : 'debited'} locally.`);
    }

    setTimeout(() => setToastMessage(''), 3000);
    setSelectedPartnerForWallet(null);
    setWalletAmount('');
    setWalletAccount('');
    setWalletIfsc('');
    setWalletRemark('');
  };

  // Redirection for Login As
  const handleLoginAsPartner = (partner) => {
    const partnerUsername = partner.username || (partner.name.toLowerCase().replace(/\s+/g, '_') + partner.id);
    const partnerData = {
      username: partnerUsername,
      merchantId: partner.clientOutletId || ('m_outlet_' + partner.id),
      name: partner.name,
      email: partner.email,
      mobile: partner.mobile,
      city: partner.city,
      state: partner.state,
      walletBalance: partner.walletBalance,
      holdBalance: partner.holdBalance,
      activeServices: partner.activeServices
    };
    localStorage.setItem('loggedInPartner', JSON.stringify(partnerData));
    localStorage.setItem('payzo_balance_' + partnerUsername, (partner.walletBalance || 0).toString());
    setToastMessage('Logging in as ' + partner.name + '...');
    setTimeout(() => {
      setToastMessage('');
      window.open('/userdashboard', '_blank');
    }, 1000);
  };


  // Save Config
  const handleSaveConfig = (e) => {
    e.preventDefault();
    setIsConfigSaved(true);
    setTimeout(() => setIsConfigSaved(false), 3000);
  };

  // Aggregated Stats based on live database values
  const totalSystemDeposits = allTransactions
    .filter(t => t.type === 'collection' && t.status === 'success')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

  const pendingRequestsCount = withdrawalQueue.filter(w => w.status === 'Pending').length;
  const totalEarnings = (totalSystemDeposits * (feeRate / 100));
  const activeMerchantsCount = merchants.filter(m => m.status === 'Active').length;

  const filteredPartners = apiPartners.filter(p => {
    const query = (partnerSearchQuery || '').toLowerCase();
    return p.name.toLowerCase().includes(query) ||
           p.email.toLowerCase().includes(query) ||
           p.mobile.toLowerCase().includes(query) ||
           (p.clientOutletId || '').toLowerCase().includes(query);
  });

  return (
    <div className="zyqrapay-dashboard-wrapper min-vh-100 d-flex flex-column flex-lg-row" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", color: '#cbd5e1', background: 'linear-gradient(180deg, #090d16 0%, #05070a 100%)' }}>
      <style>{`
        /* Import premium font */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* Scrollbar customization */
        .zyqrapay-dashboard-wrapper::-webkit-scrollbar,
        .zyqrapay-dashboard-wrapper *::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .zyqrapay-dashboard-wrapper::-webkit-scrollbar-track,
        .zyqrapay-dashboard-wrapper *::-webkit-scrollbar-track {
          background: rgba(9, 13, 22, 0.4);
        }
        .zyqrapay-dashboard-wrapper::-webkit-scrollbar-thumb,
        .zyqrapay-dashboard-wrapper *::-webkit-scrollbar-thumb {
          background: rgba(14, 165, 233, 0.15);
          border-radius: 6px;
        }
        .zyqrapay-dashboard-wrapper::-webkit-scrollbar-thumb:hover,
        .zyqrapay-dashboard-wrapper *::-webkit-scrollbar-thumb:hover {
          background: rgba(14, 165, 233, 0.3);
        }
        
        /* Glassmorphic Cards - High-tech style */
        .zyqrapay-dashboard-wrapper .glass-card {
          background: rgba(13, 19, 33, 0.5) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border: 1px solid rgba(255, 255, 255, 0.04) !important;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0, 0, 0, 0.3) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 14px !important;
        }
        .zyqrapay-dashboard-wrapper .glass-card:hover {
          transform: translateY(-4px) !important;
          border-color: rgba(14, 165, 233, 0.25) !important;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.07), 0 20px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(14, 165, 233, 0.1) !important;
        }
        
        /* Sidebar nav links styling */
        .zyqrapay-dashboard-wrapper .nav-link-custom {
          position: relative;
          color: #64748b !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border-left: 3px solid transparent !important;
          font-weight: 600;
          border-radius: 0px !important;
          letter-spacing: 0.04em;
        }
        .zyqrapay-dashboard-wrapper .nav-link-custom:hover {
          color: #f1f5f9 !important;
          background: rgba(255, 255, 255, 0.02) !important;
        }
        .zyqrapay-dashboard-wrapper .nav-link-custom:hover svg {
          transform: translateX(3px);
          color: #38bdf8 !important;
        }
        .zyqrapay-dashboard-wrapper .nav-link-custom svg {
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .zyqrapay-dashboard-wrapper .nav-link-custom.active {
          color: #ffffff !important;
          background: linear-gradient(90deg, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0.01) 100%) !important;
          border-left: 3px solid #0ea5e9 !important;
        }
        
        /* Table Styles */
        .zyqrapay-dashboard-wrapper .premium-table tbody tr {
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03) !important;
        }
        .zyqrapay-dashboard-wrapper .premium-table tbody tr:hover {
          background-color: rgba(14, 165, 233, 0.015) !important;
        }
        .zyqrapay-dashboard-wrapper .premium-table th {
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 10px;
          color: #64748b !important;
          border-bottom: 2px solid rgba(255, 255, 255, 0.05) !important;
          padding: 14px 18px !important;
        }
        .zyqrapay-dashboard-wrapper .premium-table td {
          padding: 16px 18px !important;
          vertical-align: middle;
        }
        
        /* Premium Input Fields */
        .zyqrapay-dashboard-wrapper .premium-input,
        .zyqrapay-dashboard-wrapper .premium-select {
          background-color: rgba(9, 13, 22, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 8px !important;
          color: #ffffff !important;
          padding: 10px 14px !important;
          font-size: 13.5px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .zyqrapay-dashboard-wrapper .premium-input:focus,
        .zyqrapay-dashboard-wrapper .premium-select:focus {
          border-color: #0ea5e9 !important;
          box-shadow: 0 0 12px rgba(14, 165, 233, 0.15) !important;
          background-color: rgba(9, 13, 22, 0.8) !important;
          outline: none;
        }
        
        /* Premium Buttons */
        .zyqrapay-dashboard-wrapper .premium-btn-primary {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          color: #ffffff !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 0 4px 14px rgba(14, 165, 233, 0.2) !important;
          border-radius: 8px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .zyqrapay-dashboard-wrapper .premium-btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.35) !important;
        }
        
        .zyqrapay-dashboard-wrapper .premium-btn-secondary {
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.07) !important;
          color: #cbd5e1 !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
          border-radius: 8px;
          font-weight: 600;
        }
        .zyqrapay-dashboard-wrapper .premium-btn-secondary:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.06) !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        
        .zyqrapay-dashboard-wrapper .table>:not(caption)>*>* {
          color: inherit;
        }

        /* Pulsing Dot Status Indicator */
        @keyframes pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(14, 165, 233, 0); }
          100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
        }
        .pulse-dot-indicator {
          animation: pulse-dot 2s infinite;
        }

        /* Smooth page fade */
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {/* SIDEBAR */}
      <aside className="d-flex flex-column text-white border-end flex-shrink-0" style={{ width: '260px', minHeight: '100vh', zIndex: 10, background: '#0b0f19', borderColor: 'rgba(255,255,255,0.04)' }}>
        
        {/* Logo and Brand */}
        <div className="p-4 border-bottom d-flex align-items-center gap-3" style={{ borderColor: 'rgba(255, 255, 255, 0.04)' }}>
          <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H19L11 19H21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 7H7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
              <path d="M4 12H9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
            </svg>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold fs-6 tracking-tight text-white" style={{ letterSpacing: '0.03em' }}>Payzo</span>
            <span className="text-secondary" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#38bdf8' }}>Core System</span>
          </div>
        </div>

        {/* Sidebar Nav links */}
        <nav className="nav nav-pills flex-column px-3 py-4 flex-grow-1" style={{ gap: '2px' }}>
          {[
            { id: 'Overview',      translationKey: 'overview',      icon: LayoutGrid },
            { id: 'Merchants',     translationKey: 'merchants',     icon: Users },
            { id: 'API Partners',  translationKey: 'apiPartners',   icon: Users },
            { id: 'Approvals',     translationKey: 'approvals',     icon: ArrowUpDown },
            { id: 'Transactions',  translationKey: 'transactions',  icon: Activity },
            { id: 'ChargesSet',    translationKey: 'chargesSet',    icon: IndianRupee },
            { id: 'Settings',      translationKey: 'settings',      icon: Sliders },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-link-custom w-100 text-start d-flex align-items-center gap-1 py-3 px-3 border-0 transition-all duration-200 ${isActive ? 'active' : ''}`}
                style={{ fontSize: '13.5px', background: 'transparent', gap: '6px' }}
              >
                <Icon size={16} style={{ color: isActive ? '#38bdf8' : '#64748b' }} />
                {t(item.translationKey)}
              </button>
            );
          })}
        </nav>

        {/* Language switcher, profile and logout in sidebar footer */}
        <div className="p-3 border-top" style={{ backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.04)' }}>
          
          {/* Language Selector */}
          <div className="mb-3 p-2.5 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255,255,255,0.03)' }}>
            <span className="text-secondary fs-8 fw-semibold d-block mb-2 text-uppercase tracking-wider" style={{ fontSize: '9px', color: '#64748b' }}>{t('language')}</span>
            <div className="d-flex gap-1">
              <button
                onClick={() => setLanguage('中文')}
                className="btn btn-sm py-1 px-2 fs-8 flex-grow-1 border-0 transition-all fw-semibold"
                style={{
                  background: language === '中文' ? 'rgba(14, 165, 233, 0.12)' : 'transparent',
                  color: language === '中文' ? '#38bdf8' : '#64748b',
                  borderRadius: '4px'
                }}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('English')}
                className="btn btn-sm py-1 px-2 fs-8 flex-grow-1 border-0 transition-all fw-semibold"
                style={{
                  background: language === 'English' ? 'rgba(14, 165, 233, 0.12)' : 'transparent',
                  color: language === 'English' ? '#38bdf8' : '#64748b',
                  borderRadius: '4px'
                }}
              >
                English
              </button>
            </div>
          </div>

          {/* Profile card */}
          <div className="d-flex align-items-center gap-2.5 py-2 mb-2 border-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.04)' }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(56, 189, 248, 0.15) 100%)', color: '#38bdf8', fontSize: '12.5px', border: '1px solid rgba(14, 165, 233, 0.1)' }}>
              AD
            </div>
            <div className="d-flex flex-column">
              <span className="fw-semibold text-white" style={{ fontSize: '12px' }}>{t('welcomeAdmin')}</span>
              <span className="text-secondary" style={{ fontSize: '9.5px', color: '#64748b' }}>Operations</span>
            </div>
          </div>

          {/* Logout button */}
          <button 
            onClick={handleLogout}
            className="w-100 text-start d-flex align-items-center gap-3 py-2 px-1 border-0 rounded bg-transparent text-danger hover:opacity-80 transition-all shadow-none"
            style={{ fontSize: '13px', border: 'none', background: 'none' }}
          >
            <LogOut size={14} className="text-danger" />
            <span className="fw-semibold">{t('logout')}</span>
          </button>

        </div>
      </aside>

      {/* MAIN CONTENT REGION */}
      <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ background: 'transparent', minWidth: 0 }}>
        
        {/* Top Header Navbar */}
        <header className="px-4 py-3 border-bottom d-flex align-items-center justify-content-between shadow-sm" style={{ background: '#090d16', borderColor: 'rgba(255,255,255,0.03)' }}>
          <div className="d-flex align-items-center gap-2.5">
            <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '12px', height: '12px' }}>
              <span className="position-absolute d-inline-flex rounded-circle pulse-dot-indicator" style={{ width: '100%', height: '100%', backgroundColor: '#0ea5e9', opacity: 0.6 }}></span>
              <span className="position-relative d-inline-flex rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#0ea5e9' }}></span>
            </div>
            <span className="fw-bold font-monospace text-uppercase" style={{ fontSize: '10.5px', color: '#64748b', letterSpacing: '0.08em' }}>
              System Status: <span style={{ color: '#38bdf8' }}>Live Production</span>
            </span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-1.5 px-3 py-1.5 rounded-pill" style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
              <span className="d-block rounded-circle" style={{ width: '5px', height: '5px', backgroundColor: '#10b981' }}></span>
              <span className="fw-bold font-monospace" style={{ fontSize: '9px', color: '#10b981', letterSpacing: '0.06em' }}>{t('secEnabled')}</span>
            </div>
          </div>
        </header>

        {/* Success / Warning Toasts */}
        {toastMessage && (
          <div className="mx-4 mt-3 border-0 text-white shadow-lg py-3 px-4 fs-8 rounded-3 d-flex align-items-center justify-content-between animate-fade-in" style={{ background: 'rgba(13, 19, 33, 0.85)', backdropFilter: 'blur(12px)', borderLeft: '4px solid #0ea5e9', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 15px rgba(14, 165, 233, 0.05)' }}>
            <div className="d-flex align-items-center gap-2.5">
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', backgroundColor: 'rgba(14, 165, 233, 0.12)', color: '#38bdf8' }}>
                <Check size={11} strokeWidth={3} />
              </div>
              <span className="fw-medium text-light" style={{ fontSize: '13px' }}>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage('')} className="btn-close btn-close-white border-0 bg-transparent p-0 ms-3" style={{ fontSize: '10px', opacity: 0.6 }}></button>
          </div>
        )}

        {/* Content Body */}
        <main className="p-4 flex-grow-1 d-flex flex-column gap-4" style={{ zIndex: 2, minWidth: 0, overflowX: 'hidden' }}>

          
          {/* Welcome Message */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div>
              <h2 className="fw-bold text-white mb-1 tracking-tight" style={{ fontSize: '24px' }}>{t('welcomeAdmin')}</h2>
              <p className="text-secondary mb-0" style={{ color: '#64748b', fontSize: '13px' }}>{t('systemControl')}</p>
            </div>
            <div className="d-flex align-items-center gap-2" style={{ fontSize: '12.5px', color: '#94a3b8' }}>
              <span className="fw-medium">Last Login:</span>
              <span className="font-monospace text-white">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          {activeTab === 'Overview' && (
            <div className="animate-fade-in d-flex flex-column gap-4">
              <svg style={{ width: 0, height: 0, position: 'absolute' }}>
                <defs>
                  <linearGradient id="cyanSparklineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="amberSparklineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="blueSparklineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Aggregated Stats Cards */}
              <div className="row g-3.5">
                
                {/* Stats Card 1 */}
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="card glass-card rounded-4 p-4 h-100 border-0">
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="text-uppercase tracking-wider font-semibold mb-1" style={{ color: '#64748b', fontSize: '9.5px', letterSpacing: '0.08em' }}>{t('totalSystemDeposits')}</span>
                        <h3 className="fw-bold text-white mb-2 font-monospace" style={{ letterSpacing: '-0.02em', fontSize: '22px' }}>₹{totalSystemDeposits.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h3>
                      </div>
                      <div className="rounded-3 p-2.5 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: '#38bdf8', border: '1px solid rgba(14, 165, 233, 0.15)' }}>
                        <TrendingUp size={20} />
                      </div>
                    </div>
                    {/* Visual Sparkline */}
                    <div className="mt-3" style={{ height: '24px' }}>
                      <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
                        <path d="M0 20 Q 20 5, 40 15 T 80 5 T 100 8" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                        <path d="M0 20 Q 20 5, 40 15 T 80 5 T 100 8 L 100 24 L 0 24 Z" fill="url(#cyanSparklineGrad)" />
                      </svg>
                    </div>
                  </div>
                </div>
 
                {/* Stats Card 2 */}
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="card glass-card rounded-4 p-4 h-100 border-0">
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="text-uppercase tracking-wider font-semibold mb-1" style={{ color: '#64748b', fontSize: '9.5px', letterSpacing: '0.08em' }}>{t('pendingApprovals')}</span>
                        <h3 className="fw-bold text-white mb-2 font-monospace" style={{ letterSpacing: '-0.02em', fontSize: '22px' }}>{pendingRequestsCount}</h3>
                      </div>
                      <div className="rounded-3 p-2.5 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                        <ShieldAlert size={20} />
                      </div>
                    </div>
                    {/* Visual Sparkline */}
                    <div className="mt-3" style={{ height: '24px' }}>
                      <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
                        <path d="M0 18 L 20 12 L 40 18 L 60 8 L 80 15 L 100 5" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                        <path d="M0 18 L 20 12 L 40 18 L 60 8 L 80 15 L 100 5 L 100 24 L 0 24 Z" fill="url(#amberSparklineGrad)" />
                      </svg>
                    </div>
                  </div>
                </div>
 
                {/* Stats Card 3 */}
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="card glass-card rounded-4 p-4 h-100 border-0">
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="text-uppercase tracking-wider font-semibold mb-1" style={{ color: '#64748b', fontSize: '9.5px', letterSpacing: '0.08em' }}>{t('totalPlatformEarnings')}</span>
                        <h3 className="fw-bold text-white mb-2 font-monospace" style={{ letterSpacing: '-0.02em', fontSize: '22px' }}>₹{totalEarnings.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h3>
                      </div>
                      <div className="rounded-3 p-2.5 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: '#38bdf8', border: '1px solid rgba(14, 165, 233, 0.15)' }}>
                        <IndianRupee size={20} />
                      </div>
                    </div>
                    {/* Visual Sparkline */}
                    <div className="mt-3" style={{ height: '24px' }}>
                      <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
                        <path d="M0 15 C 30 20, 60 5, 100 2" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
                        <path d="M0 15 C 30 20, 60 5, 100 2 L 100 24 L 0 24 Z" fill="url(#blueSparklineGrad)" />
                      </svg>
                    </div>
                  </div>
                </div>
 
                {/* Stats Card 4 */}
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="card glass-card rounded-4 p-4 h-100 border-0">
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="text-uppercase tracking-wider font-semibold mb-1" style={{ color: '#64748b', fontSize: '9.5px', letterSpacing: '0.08em' }}>{t('activeMerchantsCount')}</span>
                        <h3 className="fw-bold text-white mb-2 font-monospace" style={{ letterSpacing: '-0.02em', fontSize: '22px' }}>{activeMerchantsCount} <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>/ {merchants.length}</span></h3>
                      </div>
                      <div className="rounded-3 p-2.5 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(56, 189, 248, 0.08)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                        <UserCheck size={20} />
                      </div>
                    </div>
                    {/* Progress Bar inside Card */}
                    <div className="mt-4">
                      <div className="w-100 rounded-pill" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                        <div className="rounded-pill" style={{ width: `${(activeMerchantsCount / merchants.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #38bdf8, #0ea5e9)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
 
              </div>
 
              {/* Row Grid: Pending Approvals */}
              <div className="row g-4">
                
                {/* Pending Approvals Widget */}
                <div className="col-12">
                  <div className="card glass-card border-0 rounded-4 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center mb-4 text-nowrap">
                      <h5 className="fw-bold text-white mb-0" style={{ fontSize: '16px' }}>{t('withdrawalRequests')}</h5>
                      <button onClick={() => setActiveTab('Approvals')} className="btn btn-sm premium-btn-secondary border-0 py-1.5 px-3 fs-8 fw-semibold">{language === '中文' ? '查看全部' : 'View All'}</button>
                    </div>
                    
                    <div className="table-responsive">
                      <table className="table premium-table align-middle mb-0" style={{ '--bs-table-bg': 'transparent' }}>
                        <thead>
                          <tr>
                            <th>{language === '中文' ? '商户' : 'Merchant'}</th>
                            <th>{t('amount')}</th>
                            <th>USDT</th>
                            <th>{t('merchantStatus')}</th>
                            <th className="text-end">{t('merchantActions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {withdrawalQueue.filter(w => w.status === 'Pending').length === 0 ? (
                            <tr>
                              <td colSpan="5" className="py-5 text-center fs-7 text-secondary">
                                {t('noPendingRequests')}
                              </td>
                            </tr>
                          ) : (
                            withdrawalQueue.filter(w => w.status === 'Pending').map((w) => (
                              <tr key={w.id}>
                                <td className="text-white fw-semibold">{w.merchant}</td>
                                <td className="text-light fw-medium">₹{w.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                                <td className="fw-bold font-monospace" style={{ color: '#38bdf8' }}>{w.usdt} USDT</td>
                                <td>
                                  <span className="badge px-2.5 py-1.5 fs-9" style={{ backgroundColor: 'rgba(245, 158, 11, 0.06)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.15)', borderRadius: '6px' }}>Pending</span>
                                </td>
                                <td className="text-end">
                                  <div className="d-flex gap-2 justify-content-end">
                                    <button 
                                      onClick={() => handleApproveWithdrawal(w.id)}
                                      className="btn btn-sm py-1.5 px-3 rounded-pill d-flex align-items-center gap-1.5 border-0 transition-all" 
                                      style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: '#38bdf8', border: '1px solid rgba(14, 165, 233, 0.25)', fontSize: '11px', fontWeight: 700 }}
                                    >
                                      <Check size={12} strokeWidth={2.5} /> {t('approveBtn')}
                                    </button>
                                    <button 
                                      onClick={() => handleRejectWithdrawal(w.id)}
                                      className="btn btn-sm py-1.5 px-3 rounded-pill d-flex align-items-center gap-1.5 border-0 transition-all" 
                                       style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.25)', fontSize: '11px', fontWeight: 700 }}
                                    >
                                      <X size={12} strokeWidth={2.5} /> {t('rejectBtn')}
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Merchants' && (
            <div className="card glass-card border-0 rounded-4 p-4 animate-fade-in">
              <h5 className="fw-bold text-white mb-4" style={{ fontSize: '16px' }}>{t('allMerchants')}</h5>
              <div className="table-responsive">
                <table className="table premium-table align-middle mb-0" style={{ '--bs-table-bg': 'transparent' }}>
                  <thead>
                    <tr>
                      <th>{t('merchantName')}</th>
                      <th>Username</th>
                      <th>{t('merchantId')}</th>
                      <th>{t('merchantBalance')}</th>
                      <th>{t('merchantStatus')}</th>
                      <th className="text-end">{t('merchantActions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {merchants.map((m) => (
                      <tr key={m.id}>
                        <td className="text-white fw-semibold">{m.name}</td>
                        <td className="font-monospace fs-8" style={{ color: '#a5b4fc' }}>{m.username}</td>
                        <td className="font-monospace fs-8" style={{ color: '#a5b4fc' }}>{m.merchantId}</td>
                        <td className="text-white fw-bold">₹{m.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                        <td>
                          <span className={`badge px-2.5 py-1.5 fs-9`}
                          style={{
                            backgroundColor: m.status === 'Active' ? 'rgba(14, 165, 233, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                            color: m.status === 'Active' ? '#38bdf8' : '#fca5a5',
                            border: m.status === 'Active' ? '1px solid rgba(14, 165, 233, 0.15)' : '1px solid rgba(239, 68, 68, 0.15)',
                            borderRadius: '6px'
                          }}>
                            {m.status === 'Active' ? t('active') : t('suspended')}
                          </span>
                        </td>
                        <td className="text-end">
                          <button 
                            onClick={() => handleToggleMerchantStatus(m.id)}
                            className="btn btn-sm py-1.5 px-3 rounded-pill fs-8 fw-bold transition-all shadow-none"
                            style={{
                              backgroundColor: m.status === 'Active' ? 'rgba(239, 68, 68, 0.06)' : 'rgba(14, 165, 233, 0.06)',
                              border: m.status === 'Active' ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(14, 165, 233, 0.2)',
                              color: m.status === 'Active' ? '#fca5a5' : '#38bdf8'
                            }}
                          >
                            {m.status === 'Active' ? t('suspendBtn') : t('activateBtn')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Approvals' && (
            <div className="card glass-card border-0 rounded-4 p-4 animate-fade-in">
              <h5 className="fw-bold text-white mb-4" style={{ fontSize: '16px' }}>{t('withdrawalRequests')}</h5>
              <div className="table-responsive">
                <table className="table premium-table align-middle mb-0" style={{ '--bs-table-bg': 'transparent' }}>
                  <thead>
                    <tr>
                      <th className="px-3">{t('id')}</th>
                      <th className="px-3">{language === '中文' ? '商户' : 'Merchant'}</th>
                      <th className="px-3">{t('amount')}</th>
                      <th className="px-3">USDT</th>
                      <th className="px-3">{t('address')}</th>
                      <th className="px-3">{t('merchantStatus')}</th>
                      <th className="px-3">{t('txHash')}</th>
                      <th className="px-3">{t('date')}</th>
                      <th className="px-3 text-end">{t('merchantActions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawalQueue.map((w) => (
                      <tr key={w.id}>
                        <td className="px-3 fw-bold text-white font-monospace">{w.id}</td>
                        <td className="px-3 text-white fw-semibold">{w.merchant}</td>
                        <td className="px-3 text-light">₹{w.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                        <td className="px-3 fw-bold" style={{ color: '#38bdf8' }}>{w.usdt} USDT</td>
                        <td className="px-3 font-monospace fs-8" style={{ color: '#cbd5e1' }}>{w.address}</td>
                        <td className="px-3">
                          <span className={`badge px-2.5 py-1.5 fs-9`}
                          style={{
                            backgroundColor: w.status === 'Pending' ? 'rgba(245, 158, 11, 0.08)' : 
                                            w.status === 'Approved' ? 'rgba(14, 165, 233, 0.08)' : 
                                            'rgba(239, 68, 68, 0.08)',
                            color: w.status === 'Pending' ? '#fbbf24' : 
                                   w.status === 'Approved' ? '#38bdf8' : 
                                   '#fca5a5',
                            border: w.status === 'Pending' ? '1px solid rgba(245, 158, 11, 0.15)' : 
                                    w.status === 'Approved' ? '1px solid rgba(14, 165, 233, 0.15)' : 
                                    '1px solid rgba(239, 68, 68, 0.15)',
                            borderRadius: '6px'
                          }}>
                            {w.status}
                          </span>
                        </td>
                        <td className="px-3 font-monospace fs-8" style={{ color: '#94a3b8', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {w.txHash || '-'}
                        </td>
                        <td className="px-3 fs-8 text-nowrap" style={{ color: '#64748b' }}>{w.date}</td>
                        <td className="px-3 text-end">
                          {w.status === 'Pending' ? (
                            <div className="d-flex gap-2 justify-content-end">
                              <button 
                                onClick={() => handleApproveWithdrawal(w.id)}
                                className="btn btn-sm py-1.5 px-2 border-0 d-inline-flex align-items-center justify-content-center transition-all" 
                                style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: '#38bdf8', border: '1px solid rgba(14, 165, 233, 0.25)', borderRadius: '6px' }}
                              >
                                <Check size={12} strokeWidth={2.5} />
                              </button>
                              <button 
                                onClick={() => handleRejectWithdrawal(w.id)}
                                className="btn btn-sm py-1.5 px-2 border-0 d-inline-flex align-items-center justify-content-center transition-all" 
                                style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '6px' }}
                              >
                                <X size={12} strokeWidth={2.5} />
                              </button>
                            </div>
                          ) : (
                            <span className="text-muted fs-8">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'ChargesSet' && (
            <ChargesSettingPage
              usersCount={apiPartners.length}
              onSaved={() => {
                setChargesName('Charge Profile');
                setToastMessage('Charge profile saved successfully!');
                setTimeout(() => setToastMessage(''), 2500);
              }}
            />
          )}

          {activeTab === 'Transactions' && (() => {


            const filteredTx = transactions.filter(tx => {
              const q = txAppliedSearch.toLowerCase();
              const matchSearch = !q || tx.id.toLowerCase().includes(q) || tx.merchant.toLowerCase().includes(q) || tx.gateway.toLowerCase().includes(q);
              const matchStatus = txAppliedStatus === 'All' || tx.status === txAppliedStatus;
              const matchType   = txAppliedType   === 'All' || tx.type   === txAppliedType;
              return matchSearch && matchStatus && matchType;
            }).slice(0, txRows);

            const statusStyle = (status) => {
              if (status === 'Success')  return { bg: 'rgba(14,165,233,0.08)',  color: '#38bdf8', border: '1px solid rgba(14,165,233,0.15)' };
              if (status === 'Pending')  return { bg: 'rgba(245,158,11,0.08)',  color: '#fbbf24', border: '1px solid rgba(245,158,11,0.15)' };
              if (status === 'Failed')   return { bg: 'rgba(239,68,68,0.08)',   color: '#fca5a5', border: '1px solid rgba(239,68,68,0.15)' };
              if (status === 'Refunded') return { bg: 'rgba(20,184,166,0.08)', color: '#2dd4bf', border: '1px solid rgba(20,184,166,0.15)' };
              return { bg: 'transparent', color: '#94a3b8', border: '1px solid transparent' };
            };

            const handleApply = () => {
              setTxAppliedSearch(txSearch);
              setTxAppliedStatus(txStatusFilter);
              setTxAppliedType(txTypeFilter);
              setTxRows(parseInt(txRowsInput) || 20);
            };

            const handleReset = () => {
              setTxSearch('');
              setTxStatusFilter('All');
              setTxTypeFilter('All');
              setTxRowsInput('20');
              setTxAppliedSearch('');
              setTxAppliedStatus('All');
              setTxAppliedType('All');
              setTxRows(20);
            };

            return (
              <div className="d-flex flex-column gap-0">
                <style>{`
                  .tx-page-header { margin-bottom: 6px; }
                  .tx-record-badge {
                    background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
                    color: #fff;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 4px;
                    letter-spacing: 0.03em;
                    box-shadow: 0 2px 10px rgba(14,165,233,0.2);
                  }
                  .tx-subtitle {
                    color: #64748b;
                    font-size: 12.5px;
                    margin-top: 4px;
                    margin-bottom: 0;
                  }
                   .tx-filter-bar {
                    background: rgba(9, 13, 22, 0.4) !important;
                    border: 1px solid rgba(255, 255, 255, 0.04) !important;
                    backdrop-filter: blur(20px) !important;
                    border-radius: 16px !important;
                    padding: 16px 20px;
                    margin-top: 20px;
                    margin-bottom: 0;
                    display: flex;
                    align-items: flex-end;
                    gap: 14px;
                    flex-wrap: wrap;
                  }
                  .tx-filter-group { display: flex; flex-direction: column; gap: 5px; }
                  .tx-filter-label {
                    font-size: 9.5px;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #475569;
                  }
                  .tx-filter-input {
                    background: rgba(13, 19, 33, 0.8) !important;
                    border: 1px solid rgba(255,255,255,0.06) !important;
                    border-radius: 8px !important;
                    color: #e2e8f0 !important;
                    font-size: 12.5px !important;
                    padding-top: 0 !important;
                    padding-bottom: 0 !important;
                    padding-left: 12px !important;
                    padding-right: 12px !important;
                    height: 38px !important;
                    line-height: normal !important;
                    outline: none;
                    transition: border-color 0.2s;
                  }
                  .tx-filter-input-search {
                    padding-left: 32px !important;
                  }
                  .tx-filter-input:focus {
                    border-color: #0ea5e9 !important;
                    box-shadow: 0 0 0 3px rgba(14,165,233,0.12) !important;
                  }
                  .tx-filter-input option { background: #0d1321; }
                  .tx-apply-btn {
                    background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
                    border: none;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 12.5px;
                    font-weight: 700;
                    padding: 0 18px;
                    height: 38px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;
                    box-shadow: 0 3px 12px rgba(14,165,233,0.25);
                    transition: all 0.2s;
                    letter-spacing: 0.02em;
                  }
                  .tx-apply-btn:hover { transform: translateY(-1px); box-shadow: 0 5px 18px rgba(14,165,233,0.3); }
                  .tx-reset-btn {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 8px;
                    color: #94a3b8;
                    font-size: 12.5px;
                    font-weight: 600;
                    padding: 0 16px;
                    height: 38px;
                    cursor: pointer;
                    transition: all 0.2s;
                  }
                  .tx-reset-btn:hover { background: rgba(255,255,255,0.07); color: #e2e8f0; }
                  .tx-table-card {
                    background: rgba(9, 13, 22, 0.4) !important;
                    border: 1px solid rgba(255, 255, 255, 0.04) !important;
                    backdrop-filter: blur(20px) !important;
                    border-radius: 16px !important;
                    margin-top: 14px;
                    overflow: hidden;
                  }
                  .tx-table { width: 100%; border-collapse: collapse; }
                  .tx-table thead tr {
                    border-bottom: 2px solid rgba(255,255,255,0.05);
                    background: rgba(255,255,255,0.01);
                  }
                  .tx-table th {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.07em;
                    text-transform: uppercase;
                    color: #475569;
                    padding: 13px 16px;
                    white-space: nowrap;
                  }
                  .tx-table tbody tr {
                    border-bottom: 1px solid rgba(255,255,255,0.03);
                    transition: background 0.15s;
                  }
                  .tx-table tbody tr:last-child { border-bottom: none; }
                  .tx-table tbody tr:hover { background: rgba(14, 165, 233, 0.01); }
                  .tx-table td {
                    padding: 13px 16px;
                    font-size: 13px;
                    vertical-align: middle;
                  }
                  .tx-id-cell {
                    font-family: 'Courier New', monospace;
                    font-weight: 700;
                    font-size: 12px;
                    color: #38bdf8;
                    letter-spacing: 0.01em;
                  }
                  .tx-empty-row td {
                    padding: 60px 16px !important;
                    text-align: center;
                    color: #475569;
                    font-size: 13px;
                  }
                `}</style>

                {/* â”€â”€ Page Header â”€â”€ */}
                <div className="d-flex align-items-start justify-content-between tx-page-header flex-wrap gap-3">
                  <div>
                    <h4 className="fw-bold text-white mb-0" style={{ fontSize: '22px', letterSpacing: '-0.01em' }}>
                      {t('transactions')}
                    </h4>
                    <p className="tx-subtitle">
                      Audit all payment transactions, track status, gateway usage and volume in one stream.
                    </p>
                  </div>
                  <span className="tx-record-badge">
                    {transactions.length} record(s)
                  </span>
                </div>

                {/* â”€â”€ Filter Bar â”€â”€ */}
                <div className="tx-filter-bar">
                  {/* Search */}
                  <div className="tx-filter-group" style={{ flex: '1 1 200px', minWidth: '180px' }}>
                    <span className="tx-filter-label">Search</span>
                    <div style={{ position: 'relative' }}>
                      <Search size={13} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#475569', pointerEvents: 'none' }} />
                      <input
                        type="text"
                        className="tx-filter-input tx-filter-input-search w-100"
                        placeholder="Txn ID, Merchant or Gateway"
                        value={txSearch}
                        onChange={e => setTxSearch(e.target.value)}
                        style={{ paddingLeft: '32px' }}
                      />
                    </div>
                  </div>

                  {/* Status */}
                  <div className="tx-filter-group" style={{ minWidth: '150px' }}>
                    <span className="tx-filter-label">Status</span>
                    <select
                      className="tx-filter-input"
                      value={txStatusFilter}
                      onChange={e => setTxStatusFilter(e.target.value)}
                      style={{ paddingRight: '8px' }}
                    >
                      <option value="All">All statuses</option>
                      <option value="Success">{t('txSuccess')}</option>
                      <option value="Pending">{t('txPending')}</option>
                      <option value="Failed">{t('txFailed')}</option>
                      <option value="Refunded">{t('txRefunded')}</option>
                    </select>
                  </div>

                  {/* Type */}
                  <div className="tx-filter-group" style={{ minWidth: '130px' }}>
                    <span className="tx-filter-label">Type</span>
                    <select
                      className="tx-filter-input"
                      value={txTypeFilter}
                      onChange={e => setTxTypeFilter(e.target.value)}
                    >
                      <option value="All">All Types</option>
                      <option value="Pay In">Pay In</option>
                      <option value="Pay Out">Pay Out</option>
                    </select>
                  </div>

                  {/* Rows */}
                  <div className="tx-filter-group" style={{ width: '80px' }}>
                    <span className="tx-filter-label">Rows</span>
                    <input
                      type="number"
                      className="tx-filter-input"
                      value={txRowsInput}
                      onChange={e => setTxRowsInput(e.target.value)}
                      min="1"
                      max="500"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-2 align-items-end">
                    <button className="tx-apply-btn" onClick={handleApply}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                      </svg>
                      Apply
                    </button>
                    <button className="tx-reset-btn" onClick={handleReset}>
                      Reset
                    </button>
                  </div>
                </div>

                {/* â”€â”€ Table â”€â”€ */}
                <div className="tx-table-card">
                  <div className="table-responsive">
                    <table className="tx-table">
                      <thead>
                        <tr>
                          <th>{t('txId')}</th>
                          <th>{t('txMerchant')}</th>
                          <th>{t('txType')}</th>
                          <th>{t('txGateway')}</th>
                          <th>{t('txAmount')}</th>
                          <th>{t('txStatus')}</th>
                          <th>{t('txDate')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTx.length === 0 ? (
                          <tr className="tx-empty-row">
                            <td colSpan="7">No transactions found matching your filters.</td>
                          </tr>
                        ) : filteredTx.map(tx => {
                          const st = statusStyle(tx.status);
                          return (
                            <tr key={tx.id}>
                              <td className="tx-id-cell">{tx.id}</td>
                              <td className="fw-semibold" style={{ color: '#e2e8f0' }}>{tx.merchant}</td>
                              <td>
                                <span style={{
                                  display: 'inline-block',
                                  padding: '3px 10px',
                                  borderRadius: '4px',
                                  fontSize: '11px',
                                  fontWeight: 700,
                                  backgroundColor: tx.type === 'Pay In' ? 'rgba(14,165,233,0.08)' : 'rgba(56,189,248,0.08)',
                                  color: tx.type === 'Pay In' ? '#38bdf8' : '#7dd3fc',
                                  border: tx.type === 'Pay In' ? '1px solid rgba(14,165,233,0.15)' : '1px solid rgba(56,189,248,0.15)'
                                }}>
                                  {tx.type}
                                </span>
                              </td>
                              <td style={{ color: '#64748b', fontSize: '12.5px' }}>{tx.gateway}</td>
                              <td className="fw-bold" style={{ color: '#f1f5f9', fontSize: '13.5px' }}>
                                ₹{tx.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                              </td>
                              <td>
                                <span style={{
                                  display: 'inline-block',
                                  padding: '3px 10px',
                                  borderRadius: '4px',
                                  fontSize: '11px',
                                  fontWeight: 700,
                                  backgroundColor: st.bg,
                                  color: st.color,
                                  border: st.border
                                }}>
                                  {tx.status}
                                </span>
                              </td>
                              <td style={{ color: '#64748b', fontSize: '12px', whiteSpace: 'nowrap' }}>{tx.date}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            );
          })()}

          {activeTab === 'Settings' && (() => {
            const acSettingTabs = [
              { id: 'platform_fee',  label: '💰 Platform Fee (Admin)' },
              { id: 'personal',      label: 'Personal Detail' },
              { id: 'billing',       label: 'Billing Address' },
              { id: 'apis',          label: 'Active APIs' },
              { id: 'bank',          label: 'Admin Bank Accounts' },
              { id: 'password',      label: 'Change Password' },
              { id: 'mobile',        label: 'Change Mobile No' },
            ];

            return (
              <div className="d-flex flex-column gap-0">
                <style>{`
                  .ac-tabs-bar {
                    display: flex;
                    gap: 0;
                    border-bottom: 2px solid rgba(255,255,255,0.06);
                    margin-bottom: 28px;
                    overflow-x: auto;
                    scrollbar-width: none;
                  }
                  .ac-tabs-bar::-webkit-scrollbar { display: none; }
                  .ac-tab-btn {
                    padding: 12px 20px;
                    background: none;
                    border: none;
                    border-bottom: 3px solid transparent;
                    margin-bottom: -2px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #64748b;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                  }
                  .ac-tab-btn:hover { color: #cbd5e1; }
                  .ac-tab-btn.active {
                    color: #0ea5e9;
                    border-bottom-color: #0ea5e9;
                  }
                  .ac-card {
                    background: rgba(9, 13, 22, 0.45);
                    border: 1px solid rgba(255,255,255,0.04);
                    backdrop-filter: blur(20px);
                    border-radius: 16px;
                    padding: 32px;
                    max-width: 620px;
                    margin: 0 auto;
                    width: 100%;
                  }
                  .ac-card-title {
                    font-size: 20px;
                    font-weight: 800;
                    color: #f1f5f9;
                    text-align: center;
                    margin-bottom: 28px;
                  }
                  .ac-field-wrap { display: flex; flex-direction: column; gap: 5px; margin-bottom: 18px; }
                  .ac-field-label {
                    font-size: 12.5px;
                    font-weight: 600;
                    color: #94a3b8;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .ac-verified-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 10.5px;
                    font-weight: 700;
                    color: #10b981;
                    letter-spacing: 0.05em;
                  }
                  .ac-input {
                    width: 100%;
                    background: rgba(6,10,9,0.6);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 8px;
                    color: #e2e8f0;
                    font-size: 13.5px;
                    padding: 11px 14px;
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                  }
                  .ac-input:focus {
                    border-color: #10b981;
                    box-shadow: 0 0 0 3px rgba(16,185,129,0.12);
                  }
                  .ac-input:disabled {
                    background: rgba(255,255,255,0.02);
                    color: #475569;
                    cursor: not-allowed;
                  }
                  .ac-helper-text {
                    font-size: 11px;
                    color: #475569;
                    margin-top: 4px;
                  }
                  .ac-save-btn {
                    width: 100%;
                    background: linear-gradient(135deg, #059669, #10b981);
                    border: none;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    padding: 13px;
                    cursor: pointer;
                    box-shadow: 0 4px 14px rgba(16,185,129,0.3);
                    transition: all 0.2s;
                    margin-top: 8px;
                  }
                  .ac-save-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(16,185,129,0.45); }
                  .ac-cancel-btn {
                    flex: 1;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    color: #94a3b8;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 11px;
                    cursor: pointer;
                    transition: all 0.2s;
                  }
                  .ac-cancel-btn:hover { background: rgba(255,255,255,0.08); color: #e2e8f0; }
                  .ac-update-btn {
                    flex: 2;
                    background: linear-gradient(135deg, #059669, #10b981);
                    border: none;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    padding: 11px;
                    cursor: pointer;
                    box-shadow: 0 4px 14px rgba(16,185,129,0.25);
                    transition: all 0.2s;
                  }
                  .ac-update-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(16,185,129,0.4); }
                  /* API rows */
                  .ac-wide-card {
                    background: rgba(10,17,15,0.65);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 16px;
                    padding: 0;
                    overflow: hidden;
                  }
                  .ac-wide-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    padding: 22px 24px 16px;
                    flex-wrap: wrap;
                    gap: 12px;
                  }
                  .ac-wide-title {
                    font-size: 17px;
                    font-weight: 800;
                    color: #f1f5f9;
                    margin: 0 0 3px;
                  }
                  .ac-wide-sub {
                    font-size: 12px;
                    color: #64748b;
                    margin: 0;
                  }
                  .ac-add-btn {
                    background: linear-gradient(135deg, #059669, #10b981);
                    border: none;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 12.5px;
                    font-weight: 700;
                    padding: 8px 18px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    box-shadow: 0 3px 10px rgba(16,185,129,0.3);
                    transition: all 0.2s;
                  }
                  .ac-add-btn:hover { transform: translateY(-1px); box-shadow: 0 5px 16px rgba(16,185,129,0.45); }
                  .ac-badge-row {
                    display: flex;
                    gap: 10px;
                    padding: 0 24px 16px;
                  }
                  .ac-count-badge {
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 11.5px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                  }
                  .ac-api-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px 24px;
                    border-top: 1px solid rgba(255,255,255,0.04);
                    gap: 12px;
                  }
                  .ac-api-name { font-size: 14px; font-weight: 700; color: #e2e8f0; margin: 0 0 2px; }
                  .ac-api-desc { font-size: 11.5px; color: #64748b; margin: 0; }
                  .ac-edit-btn {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    color: #94a3b8;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                  }
                  .ac-edit-btn:hover { background: rgba(255,255,255,0.07); color: #e2e8f0; }
                  .ac-status-active {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 14px;
                    border-radius: 20px;
                    font-size: 11.5px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s;
                    background: rgba(16,185,129,0.1);
                    color: #10b981;
                    border: 1px solid rgba(16,185,129,0.25);
                  }
                  .ac-status-inactive {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 14px;
                    border-radius: 20px;
                    font-size: 11.5px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s;
                    background: rgba(255,255,255,0.04);
                    color: #64748b;
                    border: 1px solid rgba(255,255,255,0.08);
                  }
                  .ac-empty-state {
                    text-align: center;
                    padding: 48px 24px;
                    color: #475569;
                    font-size: 13.5px;
                  }
                  .ac-refresh-btn {
                    width: 100%;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 10px;
                    color: #94a3b8;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin: 0 24px 24px;
                    width: calc(100% - 48px);
                    transition: all 0.2s;
                  }
                  .ac-refresh-btn:hover { background: rgba(255,255,255,0.07); color: #e2e8f0; }
                  .ac-save-api-btn {
                    background: linear-gradient(135deg, #059669, #10b981);
                    border: none;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    padding: 13px 32px;
                    cursor: pointer;
                    box-shadow: 0 4px 14px rgba(16,185,129,0.3);
                    transition: all 0.2s;
                    margin: 16px 24px 24px;
                    display: block;
                    width: calc(100% - 48px);
                  }
                  .ac-save-api-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(16,185,129,0.45); }
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  .spin-anim {
                    animation: spin 0.8s linear infinite;
                  }
                `}</style>

                {/* â”€â”€ Tab Bar â”€â”€ */}
                <div className="ac-tabs-bar">
                  {acSettingTabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`ac-tab-btn${settingSubTab === tab.id ? ' active' : ''}`}
                      onClick={() => setSettingSubTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* ── PLATFORM FEE (Admin Only) ── */}
                {settingSubTab === 'platform_fee' && (
                  <div className="ac-card" style={{ maxWidth: '580px' }}>
                    <div className="d-flex align-items-center gap-2 mb-4">
                      <span style={{ fontSize: '28px' }}>💰</span>
                      <div>
                        <h3 className="ac-card-title mb-0" style={{ textAlign: 'left', fontSize: '18px' }}>Platform Fee Management</h3>
                        <p style={{ color: '#64748b', fontSize: '12px', margin: 0 }}>Admin-only control. Users cannot view or modify this setting.</p>
                      </div>
                    </div>
                    {/* Current fee badge */}
                    <div className="mb-4 p-3 rounded-3 d-flex align-items-center justify-content-between"
                      style={{ background: 'rgba(14,165,233,0.07)', border: '1px solid rgba(14,165,233,0.15)' }}>
                      <div>
                        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>CURRENT LIVE FEE</span>
                        <div style={{ fontSize: '32px', fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace', lineHeight: 1.1 }}>
                          {feeRate.toFixed(2)}%
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '11px', color: '#64748b' }}>Applied to every</span><br />
                        <span style={{ fontSize: '11px', color: '#94a3b8' }}>successful collection</span>
                      </div>
                    </div>
                    {/* Update form */}
                    <form onSubmit={handleSavePlatformFee}>
                      <div className="ac-field-wrap">
                        <label className="ac-field-label">
                          New Platform Fee (%)
                          <span style={{ fontSize: '10px', color: '#475569', fontWeight: 400 }}>0 – 100</span>
                        </label>
                        <input
                          className="ac-input"
                          type="number"
                          min="0"
                          max="100"
                          step="0.01"
                          value={dbFeePercent}
                          onChange={e => setDbFeePercent(e.target.value)}
                          placeholder="e.g. 10.00"
                          required
                        />
                        <p className="ac-helper-text">
                          ⚠️ This change applies immediately to ALL future transactions across ALL partners.
                          Existing transactions are not affected.
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="ac-save-btn"
                        disabled={feeUpdateLoading}
                        style={{ opacity: feeUpdateLoading ? 0.7 : 1 }}
                      >
                        {feeUpdateLoading ? '⏳ Saving to Database...' : '💾 Save Platform Fee to Database'}
                      </button>
                      {feeUpdateMsg && (
                        <div className="mt-3 p-3 rounded-3" style={{
                          background: feeUpdateMsg.startsWith('✅') ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
                          border: `1px solid ${feeUpdateMsg.startsWith('✅') ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
                          color: feeUpdateMsg.startsWith('✅') ? '#10b981' : '#fca5a5',
                          fontSize: '13px', fontWeight: 600
                        }}>
                          {feeUpdateMsg}
                        </div>
                      )}
                    </form>
                    {/* Security notice */}
                    <div className="mt-4 p-3 rounded-3" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.12)' }}>
                      <span style={{ fontSize: '11px', color: '#fbbf24', fontWeight: 700 }}>🔒 ADMIN-ONLY ACCESS</span>
                      <p style={{ fontSize: '11.5px', color: '#94a3b8', margin: '4px 0 0' }}>
                        Platform fee settings are strictly restricted to administrators.
                        Partner dashboard users have no access to view or modify these controls.
                        Fee changes are recorded in the database with timestamp and admin identity.
                      </p>
                    </div>
                  </div>
                )}

                {/* ── Personal Detail ── */}
                {settingSubTab === 'personal' && (
                  <div className="ac-card">
                    <h3 className="ac-card-title">Account Setting</h3>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">Full Name</label>
                      <input className="ac-input" value={adminFullName} onChange={e => setAdminFullName(e.target.value)} placeholder="Full Name" />
                    </div>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">User Name</label>
                      <input className="ac-input" value="admin" disabled />
                    </div>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">
                        Email
                        <span className="ac-verified-badge">
                          <Check size={12} /> VERIFIED
                        </span>
                      </label>
                      <input className="ac-input" value="admin@payzo.com" disabled />
                    </div>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">Mobile Number</label>
                      <input className="ac-input" value={adminMobile} disabled />
                      <p className="ac-helper-text">Mobile number update is temporarily unavailable. Click on the "Change Mobile No" tab to update.</p>
                    </div>
                    <button className="ac-save-btn" onClick={() => { 
                      if (!adminFullName.trim()) {
                        setToastMessage('Please enter your full name');
                        setTimeout(() => setToastMessage(''), 3000);
                        return;
                      }
                      localStorage.setItem('admin_fullname', adminFullName.trim());
                      setToastMessage('Personal details saved successfully'); 
                      setTimeout(() => setToastMessage(''), 3000); 
                    }}>
                      SAVE DETAILS
                    </button>
                  </div>
                )}

                {/* â”€â”€ Billing Address â”€â”€ */}
                {settingSubTab === 'billing' && (
                  <div className="ac-card">
                    <h3 className="ac-card-title">Billing Address</h3>

                    {/* GST No. */}
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">GST No. <span style={{ fontWeight: 400, color: '#64748b' }}>(optional)</span></label>
                      <input
                        className="ac-input"
                        value={adminBillingAddr.gst}
                        onChange={e => setAdminBillingAddr(p => ({...p, gst: e.target.value}))}
                        placeholder=""
                      />
                    </div>

                    {/* Company */}
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">Company <span style={{ fontWeight: 400, color: '#64748b' }}>(optional)</span></label>
                      <input
                        className="ac-input"
                        value={adminBillingAddr.company}
                        onChange={e => setAdminBillingAddr(p => ({...p, company: e.target.value}))}
                        placeholder=""
                      />
                    </div>

                    {/* Address */}
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">Address <span style={{ color: '#ef4444' }}>*</span></label>
                      <input
                        className="ac-input"
                        value={adminBillingAddr.address}
                        onChange={e => setAdminBillingAddr(p => ({...p, address: e.target.value}))}
                        placeholder=""
                      />
                    </div>

                    {/* Country | State */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div className="ac-field-wrap">
                        <label className="ac-field-label">Country <span style={{ color: '#ef4444' }}>*</span></label>
                        <input
                          className="ac-input"
                          value={adminBillingAddr.country}
                          onChange={e => setAdminBillingAddr(p => ({...p, country: e.target.value}))}
                          placeholder="Country"
                        />
                      </div>
                      <div className="ac-field-wrap">
                        <label className="ac-field-label">State <span style={{ color: '#ef4444' }}>*</span></label>
                        <input
                          className="ac-input"
                          value={adminBillingAddr.state}
                          onChange={e => setAdminBillingAddr(p => ({...p, state: e.target.value}))}
                          placeholder="State"
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">City <span style={{ color: '#ef4444' }}>*</span></label>
                      <input
                        className="ac-input"
                        value={adminBillingAddr.city}
                        onChange={e => setAdminBillingAddr(p => ({...p, city: e.target.value}))}
                        placeholder="City"
                      />
                    </div>

                    {/* District | Pincode */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div className="ac-field-wrap">
                        <label className="ac-field-label">District <span style={{ color: '#ef4444' }}>*</span></label>
                        <input
                          className="ac-input"
                          value={adminBillingAddr.district}
                          onChange={e => setAdminBillingAddr(p => ({...p, district: e.target.value}))}
                          placeholder="District"
                        />
                      </div>
                      <div className="ac-field-wrap">
                        <label className="ac-field-label">Pincode <span style={{ color: '#ef4444' }}>*</span></label>
                        <input
                          className="ac-input"
                          value={adminBillingAddr.pincode}
                          onChange={e => setAdminBillingAddr(p => ({...p, pincode: e.target.value}))}
                          placeholder="Pincode"
                        />
                      </div>
                    </div>

                    {/* Centered SAVE ADDRESS button */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                      <button
                        className="ac-save-btn"
                        style={{ width: 'auto', minWidth: '200px', justifyContent: 'center' }}
                        onClick={() => {
                          const { address, country, state, city, district, pincode } = adminBillingAddr;
                          if (!address.trim() || !country.trim() || !state.trim() || !city.trim() || !district.trim() || !pincode.trim()) {
                            setToastMessage('Please fill in all required billing fields');
                            setTimeout(() => setToastMessage(''), 3000);
                            return;
                          }
                          localStorage.setItem('admin_billing_addr', JSON.stringify(adminBillingAddr));
                          setToastMessage('Billing address saved successfully');
                          setTimeout(() => setToastMessage(''), 3000);
                        }}
                      >
                        SAVE ADDRESS
                      </button>
                    </div>
                  </div>
                )}

                {/* â”€â”€ Active APIs â”€â”€ */}
                {settingSubTab === 'apis' && (
                  <div className="ac-wide-card">
                    <div className="ac-wide-header">
                      <div>
                        <p className="ac-wide-title">Global API Availability</p>
                        <p className="ac-wide-sub">Enable or disable services globally and manage the API catalog from one place.</p>
                      </div>
                      <button className="ac-add-btn" onClick={() => { setShowAddApi(!showAddApi); setNewApiName(''); setNewApiDesc(''); setEditingApiId(null); }}>
                        {showAddApi ? 'Cancel Add' : <><Plus size={14} /> Add Service</>}
                      </button>
                    </div>

                    {/* Add Service form */}
                    {showAddApi && (
                      <div className="p-4 border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                        <h5 className="text-white mb-3" style={{ fontSize: '14px', fontWeight: 700 }}>Add New API Service</h5>
                        <div className="ac-field-wrap">
                          <label className="ac-field-label">Service Name</label>
                          <input className="ac-input" value={newApiName} onChange={e => setNewApiName(e.target.value)} placeholder="e.g. UPI Verification API" />
                        </div>
                        <div className="ac-field-wrap">
                          <label className="ac-field-label">Description</label>
                          <input className="ac-input" value={newApiDesc} onChange={e => setNewApiDesc(e.target.value)} placeholder="e.g. Verify UPI VPA instantly" />
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                          <button className="ac-cancel-btn" onClick={() => { setShowAddApi(false); setNewApiName(''); setNewApiDesc(''); }}>Cancel</button>
                          <button className="ac-update-btn" onClick={() => {
                            if (!newApiName.trim() || !newApiDesc.trim()) {
                              setToastMessage('Please enter both service name and description');
                              setTimeout(() => setToastMessage(''), 3000);
                              return;
                            }
                            const newSvc = {
                              id: Date.now(),
                              name: newApiName,
                              desc: newApiDesc,
                              active: true
                            };
                            setApiServices(prev => {
                              const next = [...prev, newSvc];
                              localStorage.setItem('admin_api_services', JSON.stringify(next));
                              return next;
                            });
                            setShowAddApi(false);
                            setNewApiName('');
                            setNewApiDesc('');
                            setToastMessage('New service added successfully');
                            setTimeout(() => setToastMessage(''), 3000);
                          }}>Add Service</button>
                        </div>
                      </div>
                    )}

                    {apiServices.map(svc => {
                      const isEditing = editingApiId === svc.id;
                      return (
                        <div key={svc.id} className="ac-api-row">
                          {isEditing ? (
                            <>
                              <div style={{ flex: 1 }} className="d-flex flex-column gap-2">
                                <input className="ac-input py-1 px-2 fs-8" value={editingApiName} onChange={e => setEditingApiName(e.target.value)} placeholder="Service Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', padding: '6px 10px' }} />
                                <input className="ac-input py-1 px-2 fs-8" value={editingApiDesc} onChange={e => setEditingApiDesc(e.target.value)} placeholder="Service Description" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', padding: '6px 10px' }} />
                              </div>
                              <div style={{ display: 'flex', gap: '8px', marginLeft: '12px' }}>
                                <button className="btn btn-sm py-1 px-3 fs-9 border rounded" style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#94a3b8', background: 'transparent', cursor: 'pointer' }} onClick={() => setEditingApiId(null)}>Cancel</button>
                                <button className="btn btn-sm py-1 px-3 fs-9 text-white rounded" style={{ background: '#0ea5e9', border: 'none', cursor: 'pointer' }} onClick={() => {
                                  if (!editingApiName.trim()) {
                                    setToastMessage('Service name cannot be empty');
                                    setTimeout(() => setToastMessage(''), 3000);
                                    return;
                                  }
                                  setApiServices(prev => {
                                    const next = prev.map(s => s.id === svc.id ? {...s, name: editingApiName, desc: editingApiDesc} : s);
                                    localStorage.setItem('admin_api_services', JSON.stringify(next));
                                    return next;
                                  });
                                  setEditingApiId(null);
                                  setToastMessage('Service details updated successfully');
                                  setTimeout(() => setToastMessage(''), 3000);
                                }}>Save</button>
                              </div>
                            </>
                          ) : (
                            <>
                              <div style={{ flex: 1 }}>
                                <p className="ac-api-name">{svc.name}</p>
                                <p className="ac-api-desc">{svc.desc}</p>
                              </div>
                              <button className="ac-edit-btn" onClick={() => {
                                  setEditingApiId(svc.id);
                                  setEditingApiName(svc.name);
                                  setEditingApiDesc(svc.desc);
                                  setShowAddApi(false);
                                }}>Edit Details</button>
                              </>
                            )}
                            <button
                              className={svc.active ? 'ac-status-active' : 'ac-status-inactive'}
                              onClick={() => {
                                setApiServices(prev => {
                                  const next = prev.map(s => s.id === svc.id ? {...s, active: !s.active} : s);
                                  localStorage.setItem('admin_api_services', JSON.stringify(next));
                                  return next;
                                });
                                setToastMessage(`Service "${svc.name}" ${svc.active ? 'deactivated' : 'activated'}`);
                                setTimeout(() => setToastMessage(''), 3000);
                              }}
                            >
                              {svc.active ? <><Check size={11} /> ACTIVE</> : <><X size={11} /> INACTIVE</>}
                            </button>
                          </div>
                        );
                      })}
                      <button className="ac-save-api-btn" onClick={() => { 
                        localStorage.setItem('admin_api_services', JSON.stringify(apiServices));
                        setToastMessage('API configuration saved successfully'); 
                        setTimeout(() => setToastMessage(''), 3000); 
                      }}>
                        SAVE API CONFIGURATION
                      </button>
                    </div>
                  )}
  
                  {/* â”€â”€ Admin Bank Accounts â”€â”€ */}
                  {settingSubTab === 'bank' && (() => {
                    const activeCount = adminBankAccounts.filter(a => a?.active).length;
                    const totalCount = adminBankAccounts.length;
                    
                    return (
                      <div className="ac-wide-card">
                        <div className="ac-wide-header">
                          <div>
                            <p className="ac-wide-title">Admin Bank Accounts</p>
                            <p className="ac-wide-sub">Manage the admin-owned payout accounts used by user DMT and Payout funding requests.</p>
                          </div>
                          <button className="ac-add-btn" onClick={() => { setShowAddBank(!showAddBank); setNewBankForm({ bankName: '', accountNo: '', ifsc: '', holderName: '' }); }}>
                            {showAddBank ? 'Cancel Add' : <><Plus size={14} /> Add New</>}
                          </button>
                        </div>
                        
                        {/* Add Bank Form */}
                        {showAddBank && (
                          <div className="p-4 border-top border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                            <h5 className="text-white mb-3" style={{ fontSize: '14px', fontWeight: 700 }}>Add Admin Bank Account</h5>
                            <div className="row g-3">
                              <div className="col-12 col-md-6 ac-field-wrap">
                                <label className="ac-field-label">Bank Name</label>
                                <input className="ac-input" value={newBankForm.bankName} onChange={e => setNewBankForm({...newBankForm, bankName: e.target.value})} placeholder="e.g. State Bank of India" />
                              </div>
                              <div className="col-12 col-md-6 ac-field-wrap">
                                <label className="ac-field-label">Account Number</label>
                                <input className="ac-input" value={newBankForm.accountNo} onChange={e => setNewBankForm({...newBankForm, accountNo: e.target.value})} placeholder="e.g. 30219482716" />
                              </div>
                              <div className="col-12 col-md-6 ac-field-wrap">
                                <label className="ac-field-label">IFSC Code</label>
                                <input className="ac-input" value={newBankForm.ifsc} onChange={e => setNewBankForm({...newBankForm, ifsc: e.target.value.toUpperCase()})} placeholder="e.g. SBIN0000123" maxLength={11} />
                              </div>
                              <div className="col-12 col-md-6 ac-field-wrap">
                                <label className="ac-field-label">Holder Name</label>
                                <input className="ac-input" value={newBankForm.holderName} onChange={e => setNewBankForm({...newBankForm, holderName: e.target.value})} placeholder="e.g. Payzo Solutions Pvt Ltd" />
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                              <button className="ac-cancel-btn" onClick={() => setShowAddBank(false)}>Cancel</button>
                              <button className="ac-update-btn" onClick={() => {
                                const { bankName, accountNo, ifsc, holderName } = newBankForm;
                                if (!bankName.trim() || !accountNo.trim() || !ifsc.trim() || !holderName.trim()) {
                                  setToastMessage('Please fill in all fields');
                                  setTimeout(() => setToastMessage(''), 3000);
                                  return;
                                }
                                if (!/^\d{9,18}$/.test(accountNo)) {
                                  setToastMessage('Account number must contain between 9 and 18 digits');
                                  setTimeout(() => setToastMessage(''), 3000);
                                  return;
                                }
                                if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {
                                  setToastMessage('Please enter a valid IFSC code (e.g. SBIN0000123)');
                                  setTimeout(() => setToastMessage(''), 3000);
                                  return;
                                }
                                const newBank = {
                                  id: Date.now(),
                                  bankName,
                                  accountNo,
                                  ifsc,
                                  holderName,
                                  active: true
                                };
                                setAdminBankAccounts(prev => {
                                  const next = [...prev, newBank];
                                  localStorage.setItem('admin_bank_accounts', JSON.stringify(next));
                                  return next;
                                });
                                setShowAddBank(false);
                                setToastMessage('Bank account added successfully');
                                setTimeout(() => setToastMessage(''), 3000);
                              }}>Save Bank Account</button>
                            </div>
                          </div>
                        )}
                      <div className="ac-badge-row">
                        <span className="ac-count-badge" style={{ background: 'rgba(14,165,233,0.08)', color: '#38bdf8', border: '1px solid rgba(14,165,233,0.15)' }}>
                          {activeCount} ACTIVE
                        </span>
                        <span className="ac-count-badge" style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {totalCount} TOTAL
                        </span>
                      </div>
                      
                      {totalCount === 0 ? (
                        <div className="ac-empty-state">
                          No admin payout accounts have been created yet.
                        </div>
                      ) : (
                        <div className="table-responsive px-4 pb-4">
                          <table className="table premium-table align-middle mb-0" style={{ '--bs-table-bg': 'transparent' }}>
                            <thead>
                              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                <th style={{ color: '#64748b', fontSize: '11px', fontWeight: 700, padding: '12px 8px' }}>BANK DETAILS</th>
                                <th style={{ color: '#64748b', fontSize: '11px', fontWeight: 700, padding: '12px 8px' }}>ACCOUNT INFO</th>
                                <th style={{ color: '#64748b', fontSize: '11px', fontWeight: 700, padding: '12px 8px' }}>STATUS</th>
                                <th style={{ color: '#64748b', fontSize: '11px', fontWeight: 700, padding: '12px 8px', textAlign: 'right' }}>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {adminBankAccounts.map(bank => (
                                <tr key={bank.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                  <td style={{ padding: '14px 8px' }}>
                                    <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '13.5px' }}>{bank.bankName}</div>
                                    <div style={{ color: '#64748b', fontSize: '11.5px', marginTop: '2px' }}>Holder: {bank.holderName}</div>
                                  </td>
                                  <td style={{ padding: '14px 8px' }}>
                                    <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '13px' }}>{bank.accountNo}</div>
                                    <div style={{ color: '#64748b', fontSize: '11.5px', marginTop: '2px' }}>IFSC: {bank.ifsc}</div>
                                  </td>
                                  <td style={{ padding: '14px 8px' }}>
                                    <button
                                      className={bank.active ? 'ac-status-active' : 'ac-status-inactive'}
                                      onClick={() => {
                                        setAdminBankAccounts(prev => {
                                          const next = prev.map(b => b.id === bank.id ? {...b, active: !b.active} : b);
                                          localStorage.setItem('admin_bank_accounts', JSON.stringify(next));
                                          return next;
                                        });
                                        setToastMessage(`Account status updated to ${bank.active ? 'Inactive' : 'Active'}`);
                                        setTimeout(() => setToastMessage(''), 3000);
                                      }}
                                    >
                                      {bank.active ? <><Check size={11} /> ACTIVE</> : <><X size={11} /> INACTIVE</>}
                                    </button>
                                  </td>
                                  <td style={{ padding: '14px 8px', textAlign: 'right' }}>
                                    <button 
                                      className="btn btn-sm py-1.5 px-3 rounded-3 border transition-all"
                                      style={{ borderColor: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', backgroundColor: 'rgba(239, 68, 68, 0.05)', fontSize: '11px', fontWeight: 600 }}
                                      onClick={() => {
                                        setAdminBankAccounts(prev => {
                                          const next = prev.filter(b => b.id !== bank.id);
                                          localStorage.setItem('admin_bank_accounts', JSON.stringify(next));
                                          return next;
                                        });
                                        setToastMessage('Bank account deleted successfully');
                                        setTimeout(() => setToastMessage(''), 3000);
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      
                      <button 
                        className="ac-refresh-btn" 
                        onClick={() => {
                          setIsSpinning(true);
                          setToastMessage('Refreshing bank accounts list...');
                          setTimeout(() => {
                            setIsSpinning(false);
                            setToastMessage('Bank accounts list refreshed');
                            setTimeout(() => setToastMessage(''), 2500);
                          }, 800);
                        }}
                        disabled={isSpinning}
                      >
                        <RotateCw size={14} className={isSpinning ? 'spin-anim' : ''} /> {isSpinning ? 'Refreshing...' : 'Refresh Accounts'}
                      </button>
                    </div>
                  );
                })()}

                {/* â”€â”€ Change Password â”€â”€ */}
                {settingSubTab === 'password' && (
                  <div className="ac-card">
                    <h3 className="ac-card-title">Change Password</h3>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">Old Password <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="password" className="ac-input" value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder="Enter current password" />
                    </div>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">New Password <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="password" className="ac-input" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Enter new password" />
                    </div>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">Confirm Password <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="password" className="ac-input" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm new password" />
                    </div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                      <button className="ac-cancel-btn" onClick={() => { setOldPassword(''); setNewPassword(''); setConfirmPassword(''); }}>Cancel</button>
                      <button className="ac-update-btn" onClick={() => {
                        if (!oldPassword || !newPassword || !confirmPassword) {
                          setToastMessage('Please fill in all password fields');
                          setTimeout(() => setToastMessage(''), 3000);
                          return;
                        }
                        const currentPassword = localStorage.getItem('admin_password') || 'AdminPass789';
                        if (oldPassword !== currentPassword) {
                          setToastMessage('Invalid current password');
                          setTimeout(() => setToastMessage(''), 3000);
                          return;
                        }
                        if (newPassword.length < 6) {
                          setToastMessage('New password must be at least 6 characters long');
                          setTimeout(() => setToastMessage(''), 3000);
                          return;
                        }
                        if (newPassword !== confirmPassword) {
                          setToastMessage('New password and confirm password do not match');
                          setTimeout(() => setToastMessage(''), 3000);
                          return;
                        }
                        if (oldPassword === newPassword) {
                          setToastMessage('New password must be different from current password');
                          setTimeout(() => setToastMessage(''), 3000);
                          return;
                        }
                        localStorage.setItem('admin_password', newPassword);
                        setToastMessage('Password updated successfully');
                        setOldPassword('');
                        setNewPassword('');
                        setConfirmPassword('');
                        setTimeout(() => setToastMessage(''), 3000);
                      }}>Update Password</button>
                    </div>
                  </div>
                )}

                {/* â”€â”€ Change Mobile No â”€â”€ */}
                {settingSubTab === 'mobile' && (
                  <div className="ac-card">
                    <h3 className="ac-card-title">Change Mobile No</h3>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">Current Mobile Number</label>
                      <input className="ac-input" value={adminMobile} disabled />
                    </div>
                    <div className="ac-field-wrap">
                      <label className="ac-field-label">New Mobile Number <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="tel" className="ac-input" value={newMobile} onChange={e => setNewMobile(e.target.value.replace(/\D/g, ''))} placeholder="Enter 10-digit new mobile number" maxLength={10} disabled={otpSent} />
                    </div>
                    {otpSent && (
                      <div className="ac-field-wrap">
                        <label className="ac-field-label">OTP Verification <span style={{ color: '#ef4444' }}>*</span></label>
                        <input className="ac-input" value={mobileOtp} onChange={e => setMobileOtp(e.target.value.replace(/\D/g, ''))} placeholder="Enter OTP (e.g. 123456)" maxLength={6} />
                        <p className="ac-helper-text">OTP has been sent to +91 {newMobile}. For demonstration, enter any 6 digits.</p>
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                      <button className="ac-cancel-btn" onClick={() => { setNewMobile(''); setMobileOtp(''); setOtpSent(false); }}>Cancel</button>
                      <button 
                        className="ac-update-btn" 
                        onClick={() => {
                          if (!otpSent) {
                            if (!/^\d{10}$/.test(newMobile)) {
                              setToastMessage('Please enter a valid 10-digit mobile number');
                              setTimeout(() => setToastMessage(''), 3000);
                              return;
                            }
                            if (newMobile === adminMobile) {
                              setToastMessage('New mobile number must be different from current mobile number');
                              setTimeout(() => setToastMessage(''), 3000);
                              return;
                            }
                            setOtpSent(true);
                            setMobileOtp('');
                            setToastMessage(`OTP sent to +91 ${newMobile}`);
                            setTimeout(() => setToastMessage(''), 3000);
                          } else {
                            if (!/^\d{6}$/.test(mobileOtp)) {
                              setToastMessage('Please enter a valid 6-digit OTP');
                              setTimeout(() => setToastMessage(''), 3000);
                              return;
                            }
                            setAdminMobile(newMobile);
                            localStorage.setItem('admin_mobile', newMobile);
                            setNewMobile('');
                            setMobileOtp('');
                            setOtpSent(false);
                            setToastMessage('Mobile number updated successfully');
                            setTimeout(() => setToastMessage(''), 3000);
                          }
                        }}
                      >
                        {otpSent ? 'Verify & Update' : 'Send OTP & Update'}
                      </button>
                    </div>
                    {otpSent && (
                      <p className="text-center mt-3 fs-8" style={{ color: '#64748b' }}>
                        Didn't receive code?{' '}
                        <span 
                          style={{ color: '#38bdf8', cursor: 'pointer', fontWeight: 600 }} 
                          onClick={() => {
                            setToastMessage('OTP resent successfully');
                            setTimeout(() => setToastMessage(''), 3000);
                          }}
                        >
                          Resend OTP
                        </span>
                      </p>
                    )}
                  </div>
                )}

              </div>
            );
          })()}


          {activeTab === 'API Partners' && (
            <div className="animate-fade-in">
              {partnerSubTab === 'list' && (
                <div className="card glass-card border-0 rounded-4 p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4 text-nowrap flex-wrap gap-3">
                    <h5 className="fw-bold text-white mb-0" style={{ fontSize: '16px' }}>API Partner</h5>
                    <div className="d-flex gap-2">
                      <button 
                        onClick={() => {
                          setPartnerSearchQuery('');
                          fetchPartnersFromDb();
                          setToastMessage('Data refreshed');
                          setTimeout(() => setToastMessage(''), 2000);
                        }} 
                        className="btn btn-sm premium-btn-secondary py-1.5 px-3 fs-8 fw-semibold d-flex align-items-center gap-1.5"
                      >
                        <RotateCw size={12} /> Refresh
                      </button>
                      <button 
                        onClick={handleOpenCreatePartner} 
                        className="btn btn-sm premium-btn-primary py-1.5 px-3 fs-8 fw-semibold d-flex align-items-center gap-1.5"
                      >
                        <Plus size={14} /> ADD USER
                      </button>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="d-flex gap-2 mb-4 flex-wrap max-w-md">
                    <input 
                      type="text" 
                      className="form-control premium-input fs-7" 
                      placeholder="Search users by name, email, or number..." 
                      value={partnerSearchQuery}
                      onChange={(e) => setPartnerSearchQuery(e.target.value)}
                      style={{ maxWidth: '380px' }}
                    />
                    <button 
                      className="btn premium-btn-primary py-2 px-4 fs-8"
                    >
                      <Search size={14} /> Search
                    </button>
                  </div>

                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table premium-table align-middle mb-0" style={{ '--bs-table-bg': 'transparent' }}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>DETAILS</th>
                          <th>ACTIVE SERVICES</th>
                          <th>WALLET</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPartners.length === 0 ? (
                          <tr>
                            <td colSpan="5" className="py-5 text-center fs-7 text-secondary">
                              No API Partners found
                            </td>
                          </tr>
                        ) : (
                          filteredPartners.map((p) => (
                            <tr key={p.id}>
                              <td className="text-secondary fw-semibold font-monospace fs-7">
                                {String(p.id).padStart(2, '0')}
                              </td>
                              <td>
                                <div className="text-white fw-bold fs-7 mb-0.5">{p.name}</div>
                                <div className="fs-8 text-secondary mb-0.5" style={{ color: '#94a3b8' }}>{p.email}</div>
                                <div className="fs-8 text-secondary mb-1" style={{ color: '#94a3b8' }}>{p.mobile}</div>
                                {p.clientOutletId && (
                                  <div className="fs-8 font-semibold" style={{ fontSize: '10px', color: '#60a5fa' }}>
                                    Client Outlet ID: {p.clientOutletId}
                                  </div>
                                )}
                              </td>
                              <td className="fs-8 fw-semibold" style={{ color: '#e2e8f0', textTransform: 'capitalize' }}>
                                {p.activeServices.join(', ')}
                              </td>
                              <td className="fs-8">
                                <div className="d-flex align-items-center mb-1">
                                  <span className="fw-semibold me-2" style={{ fontSize: '9px', minWidth: '40px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MAIN</span>
                                  <span className="fw-bold" style={{ color: '#ffffff' }}>₹{p.walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="fw-semibold me-2" style={{ fontSize: '9px', minWidth: '40px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HOLD</span>
                                  <span className="fw-bold" style={{ color: '#ffffff' }}>₹{p.holdBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex flex-wrap gap-2 mb-2 align-items-center">
                                  <button 
                                    onClick={() => handleLoginAsPartner(p)}
                                    className="btn btn-sm py-1.5 px-3 d-flex align-items-center gap-1.5 border transition-all" 
                                    style={{ borderColor: 'rgba(14, 165, 233, 0.25)', color: '#38bdf8', backgroundColor: 'rgba(14, 165, 233, 0.05)', fontSize: '11px', fontWeight: 600, borderRadius: '20px' }}
                                  >
                                    <LogIn size={11} /> Login as
                                  </button>
                                  <button 
                                    onClick={() => handleOpenEditPartner(p)}
                                    className="btn btn-sm py-1.5 px-3 d-flex align-items-center gap-1.5 border transition-all" 
                                    style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#cbd5e1', backgroundColor: 'rgba(255,255,255,0.02)', fontSize: '11px', fontWeight: 600, borderRadius: '20px' }}
                                  >
                                    <Edit3 size={11} /> Edit
                                  </button>
                                  <button 
                                    onClick={() => setSelectedPartnerForWallet(p)}
                                    className="btn btn-sm py-1.5 px-3 d-flex align-items-center gap-1.5 transition-all" 
                                    style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: '#38bdf8', fontSize: '11px', fontWeight: 600, border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '20px' }}
                                  >
                                    <Wallet size={11} /> Wallet Adjustment
                                  </button>
                                </div>

                                <div className="d-flex flex-wrap gap-2 align-items-center">
                                  {/* Services Dropdown */}
                                  <div className="position-relative d-inline-block">
                                    <button 
                                      onClick={() => setOpenServicesDropdownPartnerId(openServicesDropdownPartnerId === p.id ? null : p.id)}
                                      className="btn btn-sm d-flex align-items-center gap-1 py-1.5 px-3 rounded-3 transition-all" 
                                      style={{ backgroundColor: 'rgba(255,255,255,0.04)', color: '#cbd5e1', fontSize: '11px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px' }}
                                    >
                                      <ChevronDown size={11} /> Services
                                    </button>
                                    {openServicesDropdownPartnerId === p.id && (
                                      <div 
                                        className="position-absolute p-3 rounded-3 shadow-lg" 
                                        style={{ 
                                          backgroundColor: '#0d1321', 
                                          border: '1px solid rgba(14, 165, 233, 0.25)', 
                                          zIndex: 50, 
                                          top: '100%', 
                                          left: 0, 
                                          minWidth: '160px',
                                          marginTop: '6px',
                                          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)',
                                          borderRadius: '6px'
                                        }}
                                      >
                                        <div style={{ fontSize: '9px', fontWeight: 600, color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                                          Manage Services
                                        </div>
                                        {['pay in', 'pay out'].map(service => {
                                          const isChecked = p.activeServices.includes(service);
                                          return (
                                            <div
                                              key={service}
                                              onClick={() => handleToggleService(p.id, service)}
                                              style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '8px 10px',
                                                borderRadius: '8px',
                                                marginBottom: '6px',
                                                cursor: 'pointer',
                                                backgroundColor: isChecked ? 'rgba(14,165,233,0.08)' : 'rgba(255,255,255,0.02)',
                                                border: isChecked ? '1px solid rgba(14,165,233,0.2)' : '1px solid rgba(255,255,255,0.04)',
                                                transition: 'all 0.2s ease'
                                              }}
                                            >
                                              <span style={{
                                                fontSize: '11px',
                                                fontWeight: 600,
                                                color: isChecked ? '#38bdf8' : '#94a3b8',
                                                textTransform: 'capitalize'
                                              }}>
                                                {service}
                                              </span>
                                              {/* Custom toggle switch */}
                                              <div style={{
                                                width: '32px',
                                                height: '16px',
                                                borderRadius: '9px',
                                                backgroundColor: isChecked ? '#0ea5e9' : 'rgba(255,255,255,0.1)',
                                                position: 'relative',
                                                transition: 'background 0.2s ease',
                                                flexShrink: 0,
                                                boxShadow: isChecked ? '0 0 6px rgba(14,165,233,0.3)' : 'none'
                                              }}>
                                                <div style={{
                                                  width: '10px',
                                                  height: '10px',
                                                  borderRadius: '50%',
                                                  backgroundColor: '#fff',
                                                  position: 'absolute',
                                                  top: '3px',
                                                  left: isChecked ? '19px' : '3px',
                                                  transition: 'left 0.2s ease',
                                                  boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                                }} />
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>

                                  <button 
                                    onClick={() => handleTogglePartnerStatus(p.id)}
                                    className="btn btn-sm py-1.5 px-3 rounded-3 border transition-all" 
                                    style={{ borderColor: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', backgroundColor: 'rgba(245, 158, 11, 0.05)', fontSize: '11px', fontWeight: 600, borderRadius: '4px' }}
                                  >
                                    {p.status === 'Active' ? 'Mark Inactive' : 'Mark Active'}
                                  </button>

                                  <span className={`badge px-2.5 py-1 fs-9`}
                                  style={{
                                    backgroundColor: p.status === 'Active' ? 'rgba(14, 165, 233, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                                    color: p.status === 'Active' ? '#38bdf8' : '#fca5a5',
                                    border: p.status === 'Active' ? '1px solid rgba(14, 165, 233, 0.15)' : '1px solid rgba(239, 68, 68, 0.15)',
                                    borderRadius: '4px'
                                  }}>
                                    {p.status === 'Active' ? 'ACTIVE' : 'INACTIVE'}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {(partnerSubTab === 'create' || partnerSubTab === 'edit') && (
                <div className="card glass-card border-0 rounded-4 p-4">
                  <button 
                    onClick={() => setPartnerSubTab('list')} 
                    className="btn btn-sm premium-btn-secondary py-1.5 px-3 fs-8 fw-semibold mb-4 d-inline-flex align-items-center gap-2" 
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <ArrowLeft size={14} /> Back to API Partner
                  </button>

                  <h4 className="fw-bold text-white mb-1" style={{ fontSize: '18px' }}>{partnerSubTab === 'create' ? 'Create API Partner' : 'Edit API Partner'}</h4>
                  <p className="text-secondary mb-4" style={{ color: '#64748b', fontSize: '13px' }}>
                    {partnerSubTab === 'create' ? 'Add a new partner account with the required onboarding details.' : 'Update the partner onboarding details.'}
                  </p>

                  <form onSubmit={handleSavePartner}>
                    <div className="row g-4">
                      {/* Name */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Full Name</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter full name"
                          value={formName} 
                          onChange={(e) => setFormName(e.target.value)}
                          required 
                        />
                      </div>

                      {/* Email */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Email</label>
                        <input 
                          type="email" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter email address"
                          value={formEmail} 
                          onChange={(e) => setFormEmail(e.target.value)}
                          required 
                        />
                      </div>

                      {/* Mobile Number */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Mobile Number</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter 10-digit mobile number"
                          value={formMobile} 
                          onChange={(e) => setFormMobile(e.target.value)}
                          required 
                        />
                      </div>

                      {/* Password */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Password</label>
                        <div className="position-relative">
                          <input 
                            type={showFormPassword ? "text" : "password"} 
                            className="form-control premium-input w-100 pe-5" 
                            placeholder={partnerSubTab === 'edit' ? "Leave empty to keep unchanged" : "â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"}
                            value={formPassword} 
                            onChange={(e) => setFormPassword(e.target.value)}
                            required={partnerSubTab === 'create'}
                          />
                          <button 
                            type="button"
                            onClick={() => setShowFormPassword(!showFormPassword)}
                            className="position-absolute border-0 bg-transparent text-secondary p-0"
                            style={{ right: '14px', top: '50%', transform: 'translateY(-50%)' }}
                          >
                            {showFormPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Gender */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Gender</label>
                        <select 
                          className="form-select premium-select w-100" 
                          value={formGender} 
                          onChange={(e) => setFormGender(e.target.value)}
                        >
                          <option value="Male" style={{ backgroundColor: '#0f111a' }}>Male</option>
                          <option value="Female" style={{ backgroundColor: '#0f111a' }}>Female</option>
                          <option value="Other" style={{ backgroundColor: '#0f111a' }}>Other</option>
                        </select>
                      </div>

                      {/* Date of Birth */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Date of Birth</label>
                        <input 
                          type="date" 
                          className="form-control premium-input w-100" 
                          value={formDob} 
                          onChange={(e) => setFormDob(e.target.value)}
                          required 
                        />
                      </div>

                      {/* City */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>City</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter City"
                          value={formCity} 
                          onChange={(e) => setFormCity(e.target.value)}
                          required 
                        />
                      </div>

                      {/* District */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>District</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter District"
                          value={formDistrict} 
                          onChange={(e) => setFormDistrict(e.target.value)}
                          required 
                        />
                      </div>

                      {/* Pincode */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Pincode</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter Pincode"
                          value={formPincode} 
                          onChange={(e) => setFormPincode(e.target.value)}
                          required 
                        />
                      </div>

                      {/* State */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>State</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter State"
                          value={formState} 
                          onChange={(e) => setFormState(e.target.value)}
                          required 
                        />
                      </div>

                      {/* Country */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Country</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          value={formCountry} 
                          onChange={(e) => setFormCountry(e.target.value)}
                          required 
                        />
                      </div>

                      {/* Settlement Type */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Settlement Type</label>
                        <select 
                          className="form-select premium-select w-100" 
                          value={formSettlementType} 
                          onChange={(e) => setFormSettlementType(e.target.value)}
                        >
                          <option value="Not set" style={{ backgroundColor: '#0f111a' }}>Not set</option>
                          <option value="API" style={{ backgroundColor: '#0f111a' }}>API</option>
                          <option value="Hold" style={{ backgroundColor: '#0f111a' }}>Hold</option>
                        </select>
                      </div>

                      {/* Client Outlet ID */}
                      <div className="col-12 col-md-6">
                        <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Client Outlet ID</label>
                        <input 
                          type="text" 
                          className="form-control premium-input w-100" 
                          placeholder="Enter client outlet ID"
                          value={formClientOutletId} 
                          onChange={(e) => setFormClientOutletId(e.target.value)}
                        />
                        <div className="form-text fs-9 mt-1.5" style={{ color: '#64748b' }}>
                          This value is used for DMT request routing for this client.
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                      <button 
                        type="button" 
                        onClick={() => setPartnerSubTab('list')} 
                        className="btn premium-btn-secondary py-2.5 px-4 fs-8 fw-semibold"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="btn premium-btn-primary py-2.5 px-4 fs-8 fw-semibold d-flex align-items-center gap-2"
                      >
                        <Plus size={14} /> {partnerSubTab === 'create' ? 'Create User' : 'Save Changes'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

        </main>

      </div>

      {/* Wallet Adjustment Modal */}
      {selectedPartnerForWallet && (
          <div 
            className="modal-overlay" 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: 'rgba(5, 5, 10, 0.85)', 
              backdropFilter: 'blur(12px)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              zIndex: 1050 
            }}
          >
            <div 
              className="card glass-card border-0 rounded-4 p-4" 
              style={{ 
                width: '100%', 
                maxWidth: '450px', 
                border: '1px solid rgba(14, 165, 233, 0.25)',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold text-white mb-0 fs-6">Wallet Adjustment</h6>
                <button 
                  onClick={() => setSelectedPartnerForWallet(null)} 
                  className="btn-close btn-close-white border-0 bg-transparent text-white p-0 transition-all opacity-75 hover-opacity-100" 
                  style={{ fontSize: '16px' }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Subtitle */}
              <p className="text-secondary mb-3" style={{ color: '#64748b', fontSize: '12px' }}>
                {selectedPartnerForWallet.name} ({selectedPartnerForWallet.email}) â€¢ ID {String(selectedPartnerForWallet.id).padStart(2, '0')}
              </p>

              <form onSubmit={handleWalletAdjustmentSubmit} className="d-flex flex-column gap-3">
                {/* Select Wallet */}
                <div>
                  <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Select Wallet</label>
                  <select 
                    className="form-select premium-select w-100" 
                    value={walletAdjustmentType} 
                    onChange={(e) => setWalletAdjustmentType(e.target.value)}
                  >
                    <option value="Main Wallet" style={{ backgroundColor: '#0d1321' }}>Main Wallet</option>
                    <option value="Hold Wallet" style={{ backgroundColor: '#0d1321' }}>Hold Wallet</option>
                  </select>
                </div>

                {/* Action: Credit / Debit */}
                <div>
                  <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Adjustment Type</label>
                  <div className="d-flex gap-2 p-1 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <button
                      type="button"
                      onClick={() => setWalletAdjustmentAction('Credit')}
                      className="btn btn-sm py-2 flex-grow-1 border-0 rounded-2 fw-semibold transition-all"
                      style={{
                        backgroundColor: walletAdjustmentAction === 'Credit' ? '#0ea5e9' : 'transparent',
                        color: walletAdjustmentAction === 'Credit' ? '#ffffff' : '#64748b',
                        fontSize: '12px',
                        boxShadow: walletAdjustmentAction === 'Credit' ? '0 2px 8px rgba(14, 165, 233, 0.3)' : 'none',
                        borderRadius: '4px'
                      }}
                    >
                      Credit
                    </button>
                    <button
                      type="button"
                      onClick={() => setWalletAdjustmentAction('Debit')}
                      className="btn btn-sm py-2 flex-grow-1 border-0 rounded-2 fw-semibold transition-all"
                      style={{
                        backgroundColor: walletAdjustmentAction === 'Debit' ? '#ef4444' : 'transparent',
                        color: walletAdjustmentAction === 'Debit' ? '#ffffff' : '#64748b',
                        fontSize: '12px',
                        boxShadow: walletAdjustmentAction === 'Debit' ? '0 2px 8px rgba(239, 68, 68, 0.3)' : 'none',
                        borderRadius: '4px'
                      }}
                    >
                      Debit
                    </button>
                  </div>
                </div>

                {/* Wallet Summary Blocks */}
                <div className="row g-2">
                  <div className="col-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div className="fw-semibold text-secondary uppercase tracking-wider mb-1" style={{ color: '#64748b', fontSize: '8.5px' }}>MAIN WALLET</div>
                      <div className="fw-bold text-white fs-6">₹{selectedPartnerForWallet.walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div className="fw-semibold text-secondary uppercase tracking-wider mb-1" style={{ color: '#64748b', fontSize: '8.5px' }}>HOLD WALLET</div>
                      <div className="fw-bold text-white fs-6">₹{selectedPartnerForWallet.holdBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                      {walletAdjustmentAction === 'Debit' && walletAdjustmentType === 'Hold Wallet' && (
                        <div className="text-danger fw-semibold mt-1" style={{ fontSize: '8.5px' }}>Locked from manual debit</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Amount</label>
                  <input 
                    type="number" 
                    step="0.01"
                    className="form-control premium-input w-100" 
                    placeholder="Enter amount"
                    value={walletAmount} 
                    onChange={(e) => setWalletAmount(e.target.value)}
                    required 
                  />
                </div>

                {/* Account Number */}
                <div>
                  <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Account Number</label>
                  <input 
                    type="text" 
                    className="form-control premium-input w-100" 
                    placeholder="Enter account number"
                    value={walletAccount} 
                    onChange={(e) => setWalletAccount(e.target.value)}
                  />
                </div>

                {/* IFSC Code */}
                <div>
                  <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>IFSC Code</label>
                  <input 
                    type="text" 
                    className="form-control premium-input w-100" 
                    placeholder="Enter IFSC code"
                    value={walletIfsc} 
                    onChange={(e) => setWalletIfsc(e.target.value)}
                  />
                </div>

                {/* Remark */}
                <div>
                  <label className="fw-semibold mb-2 d-block text-secondary text-uppercase tracking-wider" style={{ fontSize: '9.5px', color: '#94a3b8' }}>Remark (Optional)</label>
                  <input 
                    type="text" 
                    className="form-control premium-input w-100" 
                    placeholder={walletAdjustmentAction === 'Credit' ? "Add credit remark" : "Add debit remark"}
                    value={walletRemark} 
                    onChange={(e) => setWalletRemark(e.target.value)}
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end gap-3 mt-3 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <button 
                    type="button" 
                    onClick={() => setSelectedPartnerForWallet(null)} 
                    className="btn premium-btn-secondary py-2.5 px-4 fs-8 fw-semibold"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn py-2.5 px-4 fs-8 fw-semibold text-white border-0 transition-all"
                    style={{ 
                      backgroundColor: walletAdjustmentAction === 'Credit' ? '#0ea5e9' : '#ef4444',
                      boxShadow: walletAdjustmentAction === 'Credit' ? '0 4px 12px rgba(14, 165, 233, 0.2)' : '0 4px 12px rgba(239, 68, 68, 0.2)',
                      borderRadius: '4px'
                    }}
                    disabled={walletAdjustmentAction === 'Debit' && walletAdjustmentType === 'Hold Wallet'}
                  >
                    Submit {walletAdjustmentAction}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
    </div>
  );
}
