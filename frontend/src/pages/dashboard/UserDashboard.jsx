import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutGrid, 
  CreditCard, 
  ArrowUpDown, 
  FileCode, 
  User, 
  LogOut, 
  Copy, 
  Eye, 
  EyeOff, 
  Check, 
  Shield,
  Lock,
  Wallet,
  Settings,
  ArrowUpRight,
  ArrowDownLeft,
  History,
  IndianRupee
} from 'lucide-react';

const translations = {
  English: {
    dashboard: "Dashboard",
    deposits: "Deposits",
    withdrawals: "Withdrawals",
    apiDocs: "API Docs",
    logout: "Logout",
    language: "Language",
    home: "Home",
    welcome: "Welcome",
    manageGateway: "Manage your payment gateway account",
    availableBalance: "Available Balance (After Charges)",
    platformCharges: `% Platform charges`,

    active: "Active",
    withdrawUsdt: "Withdraw USDT",
    totalDepositsCard: "Total deposits",
    gatewayPayouts: "Gateway payouts",
    totalWithdrawalsCard: "Total withdrawals",
    netReceivedCard: "Net received",
    apiCredentials: "API Credentials",
    databaseUsername: "Database Username",
    merchantId: "Merchant ID",
    inputKey: "Input Key",
    minDepositWarning: "Minimum deposit ₹200.00, use only your Merchant id and input key for API signing.",
    googleAuth: "Google Authenticator",
    disabledProtect: "Disabled. Enable this to protect login and withdrawals.",
    setUpGoogleAuth: "Set up Google Authenticator",
    withdrawalSettings: "Withdrawal Settings",
    defaultTrc20: "Default TRC20 Withdrawal Address",
    trc20Placeholder: "Enter your TRC20 USDT address",
    trc20Tip: "This address will be used for USDT withdrawals. You can change it at withdrawal time.",
    saveAddress: "Save Address",
    addressSavedMsg: "Withdrawal address saved successfully!",
    changeLoginPassword: "Change Login Password",
    oldPasswordLabel: "Old Password",
    newPasswordLabel: "New Password",
    oldPassPlaceholder: "Old password",
    newPassPlaceholder: "New password",
    changeBtn: "Change",
    passwordChangedMsg: "Password changed successfully!",
    recentTransactions: "Recent Transactions",
    recentWithdrawals: "Recent Withdrawals",
    viewAll: "View All",
    noTransactionsYet: "No transactions yet",
    noWithdrawalsYet: "No withdrawals yet",
    usdtPayout: "USDT Payout",
    processing: "Processing...",
    awaitingAdminApproval: "Awaiting administrator approval",
    
    // Deposits Page
    depositTransactions: "Deposit Transactions",
    showingSuccessful: "Showing successful deposits by default",
    successfulDeposits: "Successful Deposits",
    netReceived: "Net Received",
    platformFees: "Platform Fees",
    searchPlaceholder: "Search by order code, customer name...",
    allStatus: "All Status",
    pending: "Pending",
    success: "Success",
    failed: "Failed",
    orderCode: "Order Code",
    platformOrder: "Platform Order",
    status: "Status",
    amount: "Amount",
    netAmount: "Net Amount",
    charge: "Charge",
    customer: "Customer",
    date: "Date",
    noDepositsFound: "No deposits found",
    
    // Withdrawals Page
    newWithdrawal: "+ New Withdrawal",
    manageWithdrawals: "Manage your withdrawal requests",
    availableBalanceWithdrawal: "Available Balance",
    pendingRequests: "Pending Requests",
    totalWithdrawn: "Total Withdrawn",
    withdrawalHistory: "Withdrawal History",
    id: "ID",
    usdt: "USDT",
    trc20Address: "TRC20 Address",
    txHash: "TX Hash",
    adminNote: "Admin Note",
    noWithdrawalRequestsYet: "No withdrawal requests yet",
    
    // API Docs Page
    apiDocumentation: "Payzo API Documentation",
    integratePayzo: "Integrate Payzo Gateway into your application",
    apiIntegrationOverview: "API Integration Overview",
    apiOverviewTip: "All client requests are proxied securely through the Payzo server. Authentic credentials and IP whitelisting are mandatory.",
    type: "Type",
    order: "Order",
    status: "Status",
    amount: "Amount",
    net: "Net",
    date: "Date",
    transactions: "All Transactions"
  },
  中文: {
    dashboard: "仪表盘",
    deposits: "充值记录",
    withdrawals: "提现记录",
    apiDocs: "接口文档",
    logout: "退出登录",
    language: "语言",
    home: "首页",
    welcome: "欢迎，普拉拉德 先生",
    manageGateway: "管理您的支付网关账户",
    availableBalance: "可用余额 (扣除手续费)",
    platformCharges: `% 平台手续费`,

    active: "已启用",
    withdrawUsdt: "提现泰达币",
    totalDepositsCard: "充值总额",
    gatewayPayouts: "网关代付",
    totalWithdrawalsCard: "提现总额",
    netReceivedCard: "实收总额",
    apiCredentials: "接口凭证",
    databaseUsername: "数据库用户名",
    merchantId: "商户 ID",
    inputKey: "输入密钥",
    minDepositWarning: "最低充值 ₹200.00，签名仅使用您的商户 ID 和输入密钥。",
    googleAuth: "谷歌身份验证器",
    disabledProtect: "已禁用。启用此功能以保护登录和提现。",
    setUpGoogleAuth: "设置谷歌身份验证器",
    withdrawalSettings: "提现设置",
    defaultTrc20: "默认波场提现地址",
    trc20Placeholder: "输入波场泰达币地址",
    trc20Tip: "此地址将用于泰达币提现。您可以在提现时更改它。",
    saveAddress: "保存地址",
    addressSavedMsg: "提现地址保存成功！",
    changeLoginPassword: "修改登录密码",
    oldPasswordLabel: "旧密码",
    newPasswordLabel: "新密码",
    oldPassPlaceholder: "旧密码",
    newPassPlaceholder: "新密码",
    changeBtn: "修改",
    passwordChangedMsg: "密码修改成功！",
    recentTransactions: "最近交易",
    recentWithdrawals: "最近提现",
    viewAll: "查看全部",
    noTransactionsYet: "暂无交易",
    noWithdrawalsYet: "暂无提现",
    usdtPayout: "泰达币提现",
    processing: "处理中...",
    awaitingAdminApproval: "等待管理员审核",
    
    // Deposits Page
    depositTransactions: "充值订单",
    showingSuccessful: "默认显示成功的充值记录",
    successfulDeposits: "充值成功金额",
    netReceived: "实收金额",
    platformFees: "平台手续费",
    searchPlaceholder: "通过订单号、客户名称搜索...",
    allStatus: "所有状态",
    pending: "等待中",
    success: "成功",
    failed: "失败",
    orderCode: "订单号",
    platformOrder: "平台订单",
    status: "状态",
    amount: "总金额",
    netAmount: "净金额",
    charge: "手续费",
    customer: "客户",
    date: "日期",
    noDepositsFound: "未找到充值订单",
    
    // Withdrawals Page
    newWithdrawal: "+ 新建提现",
    manageWithdrawals: "管理您的提现申请",
    availableBalanceWithdrawal: "可用余额",
    pendingRequests: "等待审核",
    totalWithdrawn: "已提现总额",
    withdrawalHistory: "提现历史记录",
    id: "序号",
    usdt: "泰达币",
    trc20Address: "波场提现地址",
    txHash: "交易哈希",
    adminNote: "管理员留言",
    noWithdrawalRequestsYet: "暂无提现记录",
    
    // API Docs Page
    apiDocumentation: "Payzo 接口技术文档",
    integratePayzo: "将 Payzo 支付网关集成到您的应用程序中",
    apiIntegrationOverview: "代理接口概述",
    apiOverviewTip: "所有客户端请求均通过 Payzo 服务器进行安全代理。必须使用有效的凭证并配置 IP 白名单。",
    type: "类型",
    order: "订单",
    status: "状态",
    amount: "金额",
    net: "实收",
    date: "日期",
    transactions: "交易记录"
  }
};

export default function UserDashboard() {
  const navigate = useNavigate();

  // Navigation tabs
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Sidebar language state
  const [language, setLanguage] = useState('English');

  const t = (key) => {
    return translations[language]?.[key] || translations['English']?.[key] || key;
  };

  // Session partner — reactively reads loggedInPartner from localStorage
  const readPartner = () => {
    try {
      const stored = localStorage.getItem('loggedInPartner');
      return stored ? JSON.parse(stored) : null;
    } catch (e) { return null; }
  };

  const [sessionPartner, setSessionPartner] = useState(readPartner);

  // Re-read whenever localStorage changes (e.g. admin clicks "Login as" in another tab)
  useEffect(() => {
    const onStorage = () => setSessionPartner(readPartner());
    window.addEventListener('storage', onStorage);
    // Also re-read on focus (same-tab navigation)
    window.addEventListener('focus', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('focus', onStorage);
    };
  }, []);

  const username = sessionPartner?.username || "prahlad3311";
  const merchantId = sessionPartner?.merchantId || "m_1719602492dcebf73b";
  const inputKey = sessionPartner ? `k_${sessionPartner.merchantId}_secret_key_9983` : "k_1719602492dcebf73b_secret_key_67824";
  const partnerDisplayName = sessionPartner?.name || "prahlad sir";
  const partnerEmail = sessionPartner?.email || "prahlad@payzo.in";


  // State hooks
  const [showInputKey, setShowInputKey] = useState(false);
  const [apiSubTab, setApiSubTab] = useState('Auth');
  const [copiedField, setCopiedField] = useState('');
  const [trc20Address, setTrc20Address] = useState(() => {
    // Load TRC20 address specific to this user
    try { return localStorage.getItem(`payzo_trc20_${sessionPartner?.username || 'prahlad3311'}`) || ''; } catch { return ''; }
  });
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  // Success states
  const [addressSaved, setAddressSaved] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [depositFilter, setDepositFilter] = useState('Success');
  const [isDepositFilterOpen, setIsDepositFilterOpen] = useState(false);

  // ── All 10 Dashboard Data States (from DB via /balance endpoint) ──────────
  const [balance, setBalance] = useState(() => {
    try {
      const stored = localStorage.getItem(`payzo_balance_${sessionPartner?.username || 'prahlad3311'}`);
      if (stored !== null) return parseFloat(stored);
    } catch {}
    return parseFloat(sessionPartner?.walletBalance || 0);
  });
  const [holdBalance, setHoldBalance] = useState(0);
  // Deposit metrics
  const [totalDeposits, setTotalDeposits] = useState(0);      // = successfulDeposits
  const [successfulDeposits, setSuccessfulDeposits] = useState(0);
  const [platformFees, setPlatformFees] = useState(0);         // from DB
  const [netReceived, setNetReceived] = useState(0);           // successfulDeposits - platformFees
  const [platformFeePercent, setPlatformFeePercent] = useState(10); // from DB (display only for user)
  // Payout metrics
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [gatewayPayouts, setGatewayPayouts] = useState(0);
  const [pendingPayoutsCount, setPendingPayoutsCount] = useState(0);
  // Transaction list
  const [transactionsList, setTransactionsList] = useState([]);
  const [ipWhitelist, setIpWhitelist] = useState(() => {
    try {
      const stored = localStorage.getItem(`payzo_whitelist_${sessionPartner?.username || 'prahlad3311'}`);
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });
  const [backendStatus, setBackendStatus] = useState('ONLINE');
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);

  // Per-user API credentials
  const CLIENT_ID = sessionPartner?.clientId || 'c_prahlad_merchant_9983';
  const CLIENT_PASSWORD = sessionPartner?.clientPassword || 'client_password_789';

  // Per-user localStorage key prefix
  const userKey = `payzo_user_${username}`;

  // ── fetchDashboardData: reads ALL 10 metrics from enhanced /balance endpoint
  const fetchDashboardData = async () => {
    try {
      const fetchHeaders = {
        'x-client-id': CLIENT_ID,
        'x-client-password': CLIENT_PASSWORD,
        'Content-Type': 'application/json'
      };

      // Fetch balance + all 10 aggregated stats in one call
      const [balanceRes, txnsRes, wlRes] = await Promise.all([
        fetch('http://localhost:4000/api/v1/payment/balance', { headers: fetchHeaders }),
        fetch('http://localhost:4000/api/v1/payment/transactions', { headers: fetchHeaders }),
        fetch('http://localhost:4000/api/v1/payment/whitelist', { headers: fetchHeaders })
      ]);

      const balanceData = await balanceRes.json();
      if (balanceData.success) {
        // Core balance
        const bal = parseFloat(balanceData.balance);
        setBalance(bal);
        setHoldBalance(parseFloat(balanceData.holdBalance || 0));
        localStorage.setItem(`payzo_balance_${username}`, bal.toString());

        // Deposit metrics (all from DB)
        setSuccessfulDeposits(parseFloat(balanceData.successfulDeposits || 0));
        setTotalDeposits(parseFloat(balanceData.successfulDeposits || 0)); // same as successfulDeposits
        setPlatformFees(parseFloat(balanceData.platformFees || 0));
        setNetReceived(parseFloat(balanceData.netReceived || 0));
        setPlatformFeePercent(parseFloat(balanceData.platformFeePercent || 10));

        // Payout metrics
        setGatewayPayouts(parseFloat(balanceData.gatewayPayouts || 0));
        setTotalWithdrawn(parseFloat(balanceData.totalWithdrawn || 0));
        setPendingPayoutsCount(parseInt(balanceData.pendingPayoutsCount || 0));
        if (balanceData.trc20Address) {
          setTrc20Address(balanceData.trc20Address);
        }
      }

      const txnsData = await txnsRes.json();
      if (txnsData.success) setTransactionsList(txnsData.transactions);

      const wlData = await wlRes.json();
      if (wlData.success) {
        setIpWhitelist(wlData.whitelist);
        localStorage.setItem(`payzo_whitelist_${username}`, JSON.stringify(wlData.whitelist));
      }

      setBackendStatus('ONLINE');
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setBackendStatus('OFFLINE');
    }
  };

  // Auto-refresh every 30 seconds
  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, [username]); // re-fetch when user changes


  // Compute stats from DB data
  const collectionTxns = transactionsList.filter(t => t.type === 'collection');
  // platformFees, netReceived, successfulDeposits — all come from DB state now

  const usdtRate = 90; // Could also be fetched from platform_settings
  const withdrawalsList = transactionsList.filter(t => t.type === 'payout').map(w => {
    const payload = typeof w.request_payload === 'string' ? JSON.parse(w.request_payload) : w.request_payload || {};
    return {
      id: `WID${w.id}`,
      amount: parseFloat(w.amount),
      usdt: (parseFloat(w.amount) / usdtRate).toFixed(2),
      address: payload.trc20Address || payload.bankAccountNumber || payload.upiId || 'Dashboard Withdrawal',
      status: w.status === 'success' ? 'Success' : w.status === 'failed' ? 'Failed' : 'Pending',
      txHash: w.platform_order_code || 'Processing...',
      adminNote: w.status === 'success' ? 'Completed' : w.status === 'failed' ? 'Failed' : 'Awaiting administrator approval',
      date: new Date(w.created_at).toLocaleString()
    };
  });

  // pendingWithdrawalsCount from DB (accurate)
  const pendingWithdrawalsCount = pendingPayoutsCount;


  // Copy helper
  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    if (!/^T[a-zA-Z0-9]{33}$/.test(trc20Address)) {
      alert(
        language === '中文'
          ? '无效的波场(TRC20)地址！地址必须以“T”开头，长度为34位且仅包含数字和字母。'
          : 'Invalid TRC20 Address! The address must start with "T", be exactly 34 characters long, and contain only alphanumeric characters.'
      );
      return;
    }
    
    try {
      const response = await fetch('http://localhost:4000/api/v1/payment/settings/address', {
        method: 'PATCH',
        headers: {
          'x-client-id': CLIENT_ID,
          'x-client-password': CLIENT_PASSWORD,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ trc20Address })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        localStorage.setItem(`payzo_trc20_${username}`, trc20Address);
        setAddressSaved(true);
        setTimeout(() => setAddressSaved(false), 3000);
      } else {
        alert(data.message || 'Failed to save address to database.');
      }
    } catch (err) {
      console.error('Error saving TRC20 address to database:', err);
      alert('Network error saving address.');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) return;
    if (newPassword.length < 6) {
      alert(
        language === '中文'
          ? '新密码长度至少需要 6 位！'
          : 'New password must be at least 6 characters long.'
      );
      return;
    }
    if (newPassword === oldPassword) {
      alert(
        language === '中文'
          ? '新密码不能与旧密码相同！'
          : 'New password must be different from the old password.'
      );
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/v1/payment/settings/change-password', {
        method: 'POST',
        headers: {
          'x-client-id': CLIENT_ID,
          'x-client-password': CLIENT_PASSWORD,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ oldPassword, newPassword })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        // Update local credentials to keep session alive and in sync
        const storedCreds = JSON.parse(localStorage.getItem('payzo_partner_creds') || '{}');
        if (storedCreds[username]) {
          storedCreds[username].password = newPassword;
          localStorage.setItem('payzo_partner_creds', JSON.stringify(storedCreds));
        }

        // Update active session partner client password if it matches the changed password
        if (sessionPartner) {
          const updatedPartner = { ...sessionPartner, clientPassword: newPassword };
          setSessionPartner(updatedPartner);
          localStorage.setItem('loggedInPartner', JSON.stringify(updatedPartner));
        }

        setPasswordChanged(true);
        setOldPassword('');
        setNewPassword('');
        setTimeout(() => setPasswordChanged(false), 3000);
      } else {
        alert(data.message || 'Failed to change password.');
      }
    } catch (err) {
      console.error('Error changing password on database:', err);
      alert('Network error changing password.');
    }
  };

  const handleOpenWithdrawModal = () => {
    setWithdrawAddress(trc20Address);
    setWithdrawAmount('');
    setIsWithdrawModalOpen(true);
  };

  const handleNewWithdrawalSubmit = async (e) => {
    e.preventDefault();
    const amountNum = parseFloat(withdrawAmount);
    if (isNaN(amountNum) || amountNum <= 0) return;
    
    if (amountNum > balance) {
      alert(
        language === '中文' 
          ? `提现金额不能超过可用余额。您的余额：₹${balance.toFixed(2)}` 
          : `Withdrawal amount cannot exceed available balance. Your balance: ₹${balance.toFixed(2)}`
      );
      return;
    }


    try {
      const payload = {
        orderCode: `WID_FP_${Date.now()}`,
        amount: amountNum,
        method: 'usdt',
        trc20Address: withdrawAddress,
        remark: 'Dashboard withdrawal'
      };

      const response = await fetch('http://localhost:4000/api/v1/payment/payout', {
        method: 'POST',
        headers: {
          'x-client-id': CLIENT_ID,
          'x-client-password': CLIENT_PASSWORD,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success || response.ok) {
        alert(language === '中文' ? '提现申请已提交' : 'Withdrawal request submitted successfully');
        setIsWithdrawModalOpen(false);
        fetchDashboardData(); // Refresh data
      } else {
        alert(data.message || 'Failed to submit withdrawal request.');
      }
    } catch (err) {
      console.error('Withdrawal error:', err);
      alert('Error communicating with payout API.');
    }
  };

  return (
    <div className="zyqrapay-dashboard-wrapper min-vh-100 d-flex flex-column flex-lg-row bg-light" style={{ fontFamily: "'Poppins', sans-serif", color: '#cbd5e1' }}>
      <style>{`
        .zyqrapay-dashboard-wrapper .form-control.padded-search-input {
          padding-left: 44px !important;
        }
        .api-docs-section {
          background-color: transparent !important;
          color: #cbd5e1 !important;
        }
        .api-docs-section .badge.bg-success {
          color: #ffffff !important; /* Force POST text to be white */
        }
        .api-docs-section h2,
        .api-docs-section h3,
        .api-docs-section h5,
        .api-docs-section h6 {
          color: #f8fafc !important; /* Premium bright white heading */
        }
        .api-docs-section p, 
        .api-docs-section td, 
        .api-docs-section th, 
        .api-docs-section table {
          color: #cbd5e1 !important; /* Premium high-contrast slate text */
        }
        .api-docs-section span:not(.badge):not(.text-primary):not(.text-danger):not(.text-teal):not(.text-success) {
          color: #cbd5e1 !important;
        }
        .api-docs-section .text-secondary {
          color: #94a3b8 !important;
        }
        .api-docs-section .text-dark {
          color: #f8fafc !important;
        }
        .api-docs-section .card {
          background-color: #111625 !important; /* EXACT match to the dark cards */
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          border-radius: 14px !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
        }
        .api-docs-section pre {
          background-color: #0c101d !important; /* Dark pre background */
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          color: #38bdf8 !important; /* Bright blue code text */
        }
        .api-docs-section pre.text-dark {
          color: #38bdf8 !important;
        }
        .api-docs-section code {
          background-color: rgba(255, 255, 255, 0.05) !important;
          color: #fb7185 !important; /* Bright rose code text */
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
        }
        .api-docs-section code.text-dark {
          color: #fb7185 !important;
        }
        /* Table overrides to match the dark theme image */
        .api-docs-section table {
          border-color: rgba(255, 255, 255, 0.08) !important;
        }
        .api-docs-section table th {
          background-color: rgba(255, 255, 255, 0.02) !important;
          color: #cbd5e1 !important;
          font-weight: 600 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          text-transform: uppercase;
        }
        .api-docs-section table td {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          background: transparent !important;
        }
        /* Sub navigation tabs override to render as clean text tabs, bypassing global .btn */
        .api-docs-section .border-bottom.border-light-subtle {
          border-bottom-color: rgba(255, 255, 255, 0.08) !important;
        }
        .api-docs-section button.btn {
          background: transparent !important;
          color: #94a3b8 !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0px !important;
          padding: 8px 16px !important;
          font-weight: 500 !important;
          transform: none !important;
        }
        .api-docs-section button.btn:hover {
          color: #f8fafc !important;
          background: rgba(255, 255, 255, 0.03) !important;
          transform: none !important;
          box-shadow: none !important;
        }
        .api-docs-section button.btn.text-primary {
          color: #38bdf8 !important;
          border-bottom: 2px solid #0ea5e9 !important;
          font-weight: 600 !important;
        }
        .zyqrapay-dashboard-wrapper aside .btn.lang-active {
          background: #0ea5e9 !important;
          color: #ffffff !important;
          border: 1px solid #0ea5e9 !important;
        }
        .zyqrapay-dashboard-wrapper aside .btn.lang-inactive {
          background: transparent !important;
          color: #94a3b8 !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        .zyqrapay-dashboard-wrapper aside .btn.lang-inactive:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
      
      {/* SIDEBAR */}
      <aside className="d-flex flex-column bg-white border-end border-light-subtle flex-shrink-0" style={{ width: '260px', minHeight: '100vh', zIndex: 10 }}>
        
        {/* Logo and Brand */}
        <div className="p-4 border-bottom border-light-subtle d-flex align-items-center gap-3">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            {/* Speed lines on the left */}
            <path d="M2 6H7" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M1 11H6" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M3 16H8" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round"/>
            
            {/* Main stylized Z */}
            <path d="M9 5H19L11 19H21" stroke="#0ea5e9" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Small Plus badge bottom-right */}
            <circle cx="20" cy="18" r="4" fill="#0c4a6e" />
            <path d="M20 16V20M18 18H22" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span className="fw-bold fs-5 text-dark tracking-tight">Payzo</span>
        </div>

        {/* Sidebar Nav links */}
        <nav className="nav nav-pills flex-column px-3 py-4 gap-1 flex-grow-1">
          {[
            { id: 'Dashboard', translationKey: 'dashboard', icon: LayoutGrid },
            { id: 'Deposits', translationKey: 'deposits', icon: CreditCard },
            { id: 'Withdrawals', translationKey: 'withdrawals', icon: ArrowUpDown },
            { id: 'Transactions', translationKey: 'transactions', icon: History },
            { id: 'API Docs', translationKey: 'apiDocs', icon: FileCode }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-link w-100 text-start d-flex align-items-center gap-3 py-2.5 px-3 border-0 rounded transition-all duration-200 ${
                  isActive 
                    ? 'bg-light text-primary fw-semibold' 
                    : 'text-secondary bg-transparent hover:text-dark hover:bg-light'
                }`}
                style={{ fontSize: '14px' }}
              >
                <Icon size={18} className={isActive ? 'text-primary' : 'text-secondary'} />
                {t(item.translationKey)}
              </button>
            );
          })}
        </nav>

        {/* Language switcher, profile and logout in sidebar footer */}
        <div className="p-3 border-top border-light-subtle bg-white">
          
          {/* Language Selector */}
          <div className="mb-3 p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span className="text-secondary fs-8 fw-semibold d-block mb-2 text-muted" style={{ color: '#94a3b8' }}>{t('language')}</span>
            <div className="d-flex gap-2">
              <button
                onClick={() => setLanguage('中文')}
                className={`btn btn-sm py-1.5 px-3 fs-8 flex-grow-1 border transition-all ${language === '中文' ? 'lang-active' : 'lang-inactive'}`}
                style={{ borderRadius: '8px' }}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('English')}
                className={`btn btn-sm py-1.5 px-3 fs-8 flex-grow-1 border transition-all ${language === 'English' ? 'lang-active' : 'lang-inactive'}`}
                style={{ borderRadius: '8px' }}
              >
                English
              </button>
            </div>
          </div>

          {/* Profile card */}
          <div className="d-flex align-items-center gap-3 py-3 mb-2 border-bottom border-light-subtle">
            <div className="rounded-circle d-flex align-items-center justify-content-center text-primary fw-semibold" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', fontSize: '15px' }}>
              {partnerDisplayName.charAt(0).toUpperCase()}
            </div>
            <span className="fw-medium text-dark fs-7">{language === '中文' && !sessionPartner ? '普拉拉德 先生' : partnerDisplayName}</span>
          </div>

          {/* Logout button */}
          <button 
            onClick={handleLogout}
            className="w-100 text-start d-flex align-items-center gap-3 py-2 px-0 border-0 rounded bg-transparent text-danger hover:opacity-80 transition-all"
            style={{ fontSize: '14px', border: 'none', background: 'none' }}
          >
            <LogOut size={16} className="text-danger" />
            <span className="fw-medium">{t('logout')}</span>
          </button>

        </div>
      </aside>

      {/* MAIN CONTENT REGION */}
      <div className="flex-grow-1 d-flex flex-column min-vh-100 bg-light" style={{ minWidth: 0 }}>
        
        {/* Top Header Navbar */}
        <header className="px-4 py-3 bg-primary text-white d-flex align-items-center justify-content-between shadow-sm" style={{ background: 'transparent' }}>
          <span className="fw-semibold fs-7 tracking-wide text-dark">Payzo v1.0</span>
          <div className="d-flex align-items-center gap-4">
            <span className="fs-8 opacity-80 cursor-pointer hover:opacity-100">{t('home')}</span>
            <span 
              onClick={() => setLanguage(prev => prev === 'English' ? '中文' : 'English')}
              className="fs-8 opacity-80 cursor-pointer hover:opacity-100"
            >
              {t('language')}
            </span>
            <div className="d-flex align-items-center gap-2 cursor-pointer hover:opacity-100">
              <User size={14} />
              <span className="fs-8 fw-medium">{language === '中文' && !sessionPartner ? '普拉拉德 先生' : partnerDisplayName}</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-4 flex-grow-1 d-flex flex-column gap-4" style={{ backgroundColor: 'transparent', minWidth: 0, overflowX: 'hidden' }}>

          {activeTab === 'Dashboard' && (
            <>
          
          {/* Welcome Messages */}
          <div>
            <h2 className="fw-bold text-dark mb-0 fs-3">
              Welcome, {partnerDisplayName} 👋
            </h2>
            <p className="text-secondary fs-7 mb-0">
              {t('manageGateway')} &nbsp;
              <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(14,165,233,0.12)', color: '#0ea5e9', fontSize: '11px', fontWeight: 600 }}>
                {username}
              </span>
            </p>
          </div>

          {/* Large Blue Available Balance Banner */}
          <div className="rounded-4 p-4 text-white d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 shadow-sm" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0d9488 100%)' }}>
            <div>
              <span className="text-white opacity-85 fs-7 d-block mb-1 font-medium">{t('availableBalance')}</span>
              <h1 className="fw-bold text-white mb-2 fs-1">₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
              <span className="text-white opacity-75 fs-8 d-block">
                {t('platformCharges')}: <strong>{platformFeePercent.toFixed(2)}%</strong>
                <span className="badge rounded-pill px-2 py-1 ms-2 fs-9" style={{ backgroundColor: 'rgba(52, 211, 153, 0.2)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)' }}>{t('active')}</span>
                {lastUpdated && <span className="ms-2 opacity-60" style={{fontSize:'10px'}}>Updated {lastUpdated.toLocaleTimeString()}</span>}
              </span>

            </div>
            <button 
              onClick={handleOpenWithdrawModal}
              className="btn btn-light text-teal border-0 rounded-3 py-2.5 px-4 fw-semibold fs-7 d-flex align-items-center gap-2 hover:bg-opacity-95 transition-all shadow-sm" 
              style={{ color: '#0d9488' }}
            >
              {t('withdrawUsdt')} <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Row of 4 Metrics Cards */}
          <div className="row g-3">
            
            {/* Card 1: Total Deposits */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-3 shadow-sm p-3 bg-white">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                    <ArrowDownLeft size={20} />
                  </div>
                  <div>
                    <span className="text-secondary fs-8 d-block uppercase tracking-wider font-semibold">{t('totalDepositsCard')}</span>
                    <h4 className="fw-bold text-dark mb-0 mt-0.5">₹{totalDeposits.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Gateway Payouts */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-3 shadow-sm p-3 bg-white">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-success bg-opacity-10 text-success rounded-3 p-3">
                    <ArrowUpRight size={20} />
                  </div>
                  <div>
                    <span className="text-secondary fs-8 d-block uppercase tracking-wider font-semibold">{t('gatewayPayouts')}</span>
                    <h4 className="fw-bold text-dark mb-0 mt-0.5">₹{gatewayPayouts.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Total Withdrawals */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-3 shadow-sm p-3 bg-white">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-warning bg-opacity-10 text-warning rounded-3 p-3">
                    <Wallet size={20} />
                  </div>
                  <div>
                    <span className="text-secondary fs-8 d-block uppercase tracking-wider font-semibold">{t('totalWithdrawalsCard')}</span>
                    <h4 className="fw-bold text-dark mb-0 mt-0.5">₹{totalWithdrawn.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Net Received */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-3 shadow-sm p-3 bg-white">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-info bg-opacity-10 text-info rounded-3 p-3">
                    <Settings size={20} />
                  </div>
                  <div>
                    <span className="text-secondary fs-8 d-block uppercase tracking-wider font-semibold">{t('netReceivedCard')}</span>
                    <h4 className="fw-bold text-dark mb-0 mt-0.5">₹{netReceived.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Two Columns Grid: API Credentials & Google Authenticator */}
          <div className="row g-4">
            
            {/* Left Column: API Credentials */}
            <div className="col-12 col-xl-6">
              <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-3">{t('apiCredentials')}</h5>
                  
                  {/* Credentials Fields List */}
                  <div className="d-flex flex-column gap-3 mb-4">
                    
                    {/* Database Username */}
                    <div>
                      <label className="text-secondary fs-8 fw-semibold mb-1 d-block">{t('databaseUsername')}</label>
                      <div className="d-flex align-items-center justify-content-between bg-light border border-light-subtle rounded px-3 py-2">
                        <span className="text-dark font-monospace fs-7">{username}</span>
                        <button 
                          onClick={() => handleCopy(username, 'username')}
                          className="bg-transparent border-0 text-secondary hover:text-dark p-1"
                        >
                          {copiedField === 'username' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Merchant ID */}
                    <div>
                      <label className="text-secondary fs-8 fw-semibold mb-1 d-block">{t('merchantId')}</label>
                      <div className="d-flex align-items-center justify-content-between bg-light border border-light-subtle rounded px-3 py-2">
                        <span className="text-dark font-monospace fs-7">{merchantId}</span>
                        <button 
                          onClick={() => handleCopy(merchantId, 'merchantId')}
                          className="bg-transparent border-0 text-secondary hover:text-dark p-1"
                        >
                          {copiedField === 'merchantId' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Input Key */}
                    <div>
                      <label className="text-secondary fs-8 fw-semibold mb-1 d-block">{t('inputKey')}</label>
                      <div className="d-flex align-items-center justify-content-between bg-light border border-light-subtle rounded px-3 py-2">
                        <span className="text-dark font-monospace fs-7">
                          {showInputKey ? inputKey : '•••••••••••••••••••••••••••••••••••••'}
                        </span>
                        <div className="d-flex gap-2">
                          <button 
                            onClick={() => setShowInputKey(!showInputKey)}
                            className="bg-transparent border-0 text-secondary hover:text-dark p-1"
                          >
                            {showInputKey ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                          <button 
                            onClick={() => handleCopy(inputKey, 'inputKey')}
                            className="bg-transparent border-0 text-secondary hover:text-dark p-1"
                          >
                            {copiedField === 'inputKey' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Warning Alert Banner */}
                <div className="alert alert-success border-0 text-success bg-success bg-opacity-10 py-2.5 px-3 mb-0 fs-8 rounded d-flex align-items-center gap-2">
                  <span className="fw-semibold">{t('minDepositWarning')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Google Authenticator */}
            <div className="col-12 col-xl-6">
              <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-3">{t('googleAuth')}</h5>
                  
                  {/* Warning Info Alert */}
                  <div className="alert alert-warning border-0 text-warning-emphasis bg-warning bg-opacity-10 py-3 px-3 mb-4 fs-7 rounded d-flex align-items-center gap-2">
                    <Shield size={18} className="text-warning flex-shrink-0" />
                    <span>{t('disabledProtect')}</span>
                  </div>
                </div>

                {/* Action button */}
                <div>
                  <button className="btn btn-success border-0 text-white rounded-3 py-2.5 px-4 fw-semibold fs-7 shadow-sm transition-all" style={{ backgroundColor: '#10b981' }}>
                    {t('setUpGoogleAuth')}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Card: Withdrawal Settings */}
          <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
            <h5 className="fw-bold text-dark mb-3">{t('withdrawalSettings')}</h5>
            
            {addressSaved && (
              <div className="alert alert-success border-0 text-center py-2 px-3 mb-3 fs-8" style={{
                background: 'rgba(25, 135, 84, 0.1)',
                color: '#198754',
                borderRadius: '8px'
              }}>
                {t('addressSavedMsg')}
              </div>
            )}

            <form onSubmit={handleSaveAddress} className="d-flex flex-column gap-3">
              <div>
                <label className="text-secondary fs-8 fw-semibold mb-2 d-block">{t('defaultTrc20')}</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder={t('trc20Placeholder')}
                  value={trc20Address}
                  onChange={(e) => setTrc20Address(e.target.value)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    fontSize: '14px'
                  }}
                  required
                />
                <span className="text-secondary fs-8 d-block mt-2">
                  {t('trc20Tip')}
                </span>
              </div>

              <div>
                <button type="submit" className="btn btn-success border-0 text-white rounded-3 py-2.5 px-4 fw-semibold fs-7 shadow-sm transition-all" style={{ backgroundColor: '#10b981' }}>
                  {t('saveAddress')}
                </button>
              </div>
            </form>
          </div>

          {/* Card: Change Login Password */}
          <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
            <h5 className="fw-bold text-dark mb-3">{t('changeLoginPassword')}</h5>
            
            {passwordChanged && (
              <div className="alert alert-success border-0 text-center py-2 px-3 mb-3 fs-8" style={{
                background: 'rgba(25, 135, 84, 0.1)',
                color: '#198754',
                borderRadius: '8px'
              }}>
                {t('passwordChangedMsg')}
              </div>
            )}

            <form onSubmit={handleChangePassword} className="row g-3 align-items-end">
              <div className="col-12 col-md-5">
                <label className="text-secondary fs-8 fw-semibold mb-2 d-block">{t('oldPasswordLabel')}</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder={t('oldPassPlaceholder')}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    fontSize: '14px'
                  }}
                  required
                />
              </div>

              <div className="col-12 col-md-5">
                <label className="text-secondary fs-8 fw-semibold mb-2 d-block">{t('newPasswordLabel')}</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder={t('newPassPlaceholder')}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    fontSize: '14px'
                  }}
                  required
                />
              </div>

              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-success border-0 text-white rounded-3 w-100 py-2.5 fw-semibold fs-7 shadow-sm transition-all" style={{ backgroundColor: '#10b981' }}>
                  {t('changeBtn')}
                </button>
              </div>
            </form>
          </div>

          {/* Card: Recent Transactions Table */}
          <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-dark mb-0">{t('recentTransactions')}</h5>
              <button 
                onClick={() => {
                  setActiveTab('Transactions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn btn-light btn-sm text-secondary bg-light border border-light-subtle rounded-3 py-1.5 px-3 fs-8 fw-medium hover:text-dark transition-all"
              >
                {t('viewAll')}
              </button>
            </div>
            
            <div className="table-responsive">
              <table className="table align-middle mb-0" style={{ '--bs-table-bg': 'transparent', '--bs-table-border-color': '#f1f5f9' }}>
                <thead>
                  <tr className="text-secondary fs-8 border-bottom border-light-subtle">
                    <th className="py-2">{t('type')}</th>
                    <th className="py-2">{t('order')}</th>
                    <th className="py-2">{t('status')}</th>
                    <th className="py-2">{t('amount')}</th>
                    <th className="py-2">{t('net')}</th>
                    <th className="py-2">{t('date')}</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionsList.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-5 text-center text-secondary opacity-60 fs-7">
                        {t('noTransactionsYet')}
                      </td>
                    </tr>
                  ) : (
                    transactionsList.slice(0, 5).map((txn) => {
                      const isCollection = txn.type === 'collection';
                      const amount = parseFloat(txn.amount);
                      const fee = isCollection ? amount * 0.10 : 0.00;
                      const net = isCollection ? amount - fee : amount;
                      return (
                        <tr key={txn.id} className="border-bottom border-light-subtle">
                          <td className="py-3 text-dark fw-medium">
                            <span className={isCollection ? 'text-success' : 'text-primary'}>
                              {isCollection ? (language === '中文' ? '代收' : 'Pay-in') : (language === '中文' ? '代付' : 'Payout')}
                            </span>
                          </td>
                          <td className="py-3 text-secondary font-monospace fs-8">{txn.order_code}</td>
                          <td className="py-3">
                            <span className={`badge rounded-pill px-2.5 py-1 fs-9 ${
                              txn.status === 'success' ? 'bg-success bg-opacity-10 text-success' : 
                              txn.status === 'failed' ? 'bg-danger bg-opacity-10 text-danger' : 
                              'bg-warning bg-opacity-10 text-warning'
                            }`}>
                              {txn.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="py-3 text-dark">₹{amount.toFixed(2)}</td>
                          <td className={`py-3 fw-bold ${isCollection ? 'text-success' : 'text-dark'}`}>
                            {isCollection ? '+' : '-'}₹{net.toFixed(2)}
                          </td>
                          <td className="py-3 text-secondary fs-8 text-nowrap">{new Date(txn.created_at).toLocaleString()}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card: Recent Withdrawals Table */}
          <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-dark mb-0">{t('recentWithdrawals')}</h5>
              <button 
                onClick={() => {
                  setActiveTab('Withdrawals');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn btn-light btn-sm text-secondary bg-light border border-light-subtle rounded-3 py-1.5 px-3 fs-8 fw-medium hover:text-dark transition-all"
              >
                {t('viewAll')}
              </button>
            </div>
            
            <div className="table-responsive">
              <table className="table align-middle mb-0" style={{ '--bs-table-bg': 'transparent', '--bs-table-border-color': '#f1f5f9' }}>
                <thead>
                  <tr className="text-secondary fs-8 border-bottom border-light-subtle">
                    <th className="py-2">{t('type')}</th>
                    <th className="py-2">{t('order')}</th>
                    <th className="py-2">{t('status')}</th>
                    <th className="py-2">{t('amount')}</th>
                    <th className="py-2">{t('net')}</th>
                    <th className="py-2 text-nowrap">{t('date')}</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawalsList.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-5 text-center text-secondary opacity-60 fs-7">
                        {t('noWithdrawalsYet')}
                      </td>
                    </tr>
                  ) : (
                    withdrawalsList.slice(0, 5).map((w) => (
                      <tr key={w.id} className="border-bottom border-light-subtle">
                        <td className="py-3 text-dark fw-medium">{t('usdtPayout')}</td>
                        <td className="py-3 text-secondary font-monospace fs-8">{w.id.replace('WID', language === '中文' ? '提现' : 'WID')}</td>
                        <td className="py-3">
                          <span className={`badge rounded-pill px-2.5 py-1 fs-9 ${
                            w.status === 'Pending' ? 'bg-warning bg-opacity-10 text-warning' : 
                            w.status === 'Success' ? 'bg-success bg-opacity-10 text-success' : 
                            'bg-danger bg-opacity-10 text-danger'
                          }`}>
                            {w.status === 'Pending' ? t('pending') : w.status === 'Success' ? t('success') : t('failed')}
                          </span>
                        </td>
                        <td className="py-3 text-dark">₹{parseFloat(w.amount).toFixed(2)}</td>
                        <td className="py-3 text-teal fw-semibold">{w.usdt} {language === '中文' ? '泰达币' : 'USDT'}</td>
                        <td className="py-3 text-secondary fs-8 text-nowrap">{w.date}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
            </>
          )}

          {activeTab === 'Deposits' && (
            <>
              {/* Header */}
              <div>
                <h2 className="fw-bold text-dark mb-0 fs-3">{t('depositTransactions')}</h2>
                <p className="text-secondary fs-7 mb-0">{t('showingSuccessful')}</p>
              </div>

              {/* Row of 3 Metrics Cards */}
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <ArrowDownLeft size={20} />
                      </div>
                      <div>
                        <span className="text-secondary fs-8 d-block font-semibold mb-0.5">{t('successfulDeposits')}</span>
                        <h4 className="fw-bold text-dark mb-0 fs-4">₹{successfulDeposits.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-success bg-opacity-10 text-success rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <ArrowDownLeft size={20} />
                      </div>
                      <div>
                        <span className="text-secondary fs-8 d-block font-semibold mb-0.5">{t('netReceived')}</span>
                        <h4 className="fw-bold text-dark mb-0 fs-4">₹{netReceived.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-danger bg-opacity-10 text-danger rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center fw-bold fs-8" style={{ width: '48px', height: '48px' }}>
                        FEE
                      </div>
                      <div>
                        <span className="text-secondary fs-8 d-block font-semibold mb-0.5">{t('platformFees')}</span>
                        <h4 className="fw-bold text-dark mb-0 fs-4">₹{platformFees.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search & Filter Row */}
              <div className="d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-between">
                <div className="position-relative flex-grow-1" style={{ maxWidth: '600px' }}>
                  <input 
                    type="text" 
                    className="form-control padded-search-input" 
                    placeholder={t('searchPlaceholder')}
                    style={{ height: '42px', fontSize: '13px' }}
                  />
                  <div className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                </div>

                <div className="position-relative">
                  <div 
                    onClick={() => setIsDepositFilterOpen(!isDepositFilterOpen)}
                    className="d-flex align-items-center bg-white border border-light-subtle rounded px-3 py-2 gap-2 cursor-pointer shadow-sm hover:bg-light transition-all" 
                    style={{ height: '42px' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                    <span className="fs-8 fw-medium text-dark">
                      {depositFilter === 'All Status' ? t('allStatus') : depositFilter === 'Pending' ? t('pending') : depositFilter === 'Success' ? t('success') : t('failed')}
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
                  </div>

                  {isDepositFilterOpen && (
                    <div 
                      className="position-absolute end-0 mt-1 bg-white border rounded shadow-lg p-1" 
                      style={{ zIndex: 1050, minWidth: '160px' }}
                    >
                      {['All Status', 'Pending', 'Success', 'Failed'].map((status) => (
                        <div 
                          key={status}
                          onClick={() => {
                            setDepositFilter(status);
                            setIsDepositFilterOpen(false);
                          }}
                          className={`d-flex align-items-center justify-content-between px-3 py-2 rounded cursor-pointer fs-8 ${depositFilter === status ? 'bg-light fw-medium' : ''}`}
                          style={{
                            cursor: 'pointer',
                            transition: 'background-color 0.2s',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = depositFilter === status ? '#f1f5f9' : 'transparent'}
                        >
                          <span style={{ color: '#1e293b' }}>
                            {status === 'All Status' ? t('allStatus') : status === 'Pending' ? t('pending') : status === 'Success' ? t('success') : t('failed')}
                          </span>
                          {depositFilter === status && (
                            <Check size={14} className="text-secondary ms-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Table Card */}
              <div className="card border-0 rounded-3 shadow-sm p-0 bg-white overflow-hidden">
                <div className="table-responsive">
                  <table className="table align-middle mb-0" style={{ '--bs-table-bg': 'transparent', '--bs-table-border-color': '#f1f5f9' }}>
                    <thead className="bg-light bg-opacity-50">
                      <tr className="text-secondary fs-8 border-bottom border-light-subtle">
                        <th className="py-3 px-4">{t('orderCode')}</th>
                        <th className="py-3 px-3">{t('platformOrder')}</th>
                        <th className="py-3 px-3">{t('status')}</th>
                        <th className="py-3 px-3">{t('amount')}</th>
                        <th className="py-3 px-3">{t('netAmount')}</th>
                        <th className="py-3 px-3">{t('charge')}</th>
                        <th className="py-3 px-3">{t('customer')}</th>
                        <th className="py-3 px-4">{t('date')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {collectionTxns.filter(t => {
                        if (depositFilter === 'All Status') return true;
                        if (depositFilter === 'Pending') return t.status === 'pending' || t.status === 'initiated';
                        if (depositFilter === 'Success') return t.status === 'success';
                        if (depositFilter === 'Failed') return t.status === 'failed';
                        return true;
                      }).length === 0 ? (
                        <tr>
                          <td colSpan="8" className="py-5 text-center text-secondary opacity-60 fs-7">
                            {t('noDepositsFound')}
                          </td>
                        </tr>
                      ) : (
                        collectionTxns.filter(t => {
                          if (depositFilter === 'All Status') return true;
                          if (depositFilter === 'Pending') return t.status === 'pending' || t.status === 'initiated';
                          if (depositFilter === 'Success') return t.status === 'success';
                          if (depositFilter === 'Failed') return t.status === 'failed';
                          return true;
                        }).map((txn) => {
                          const amount = parseFloat(txn.amount);
                          const fee = amount * 0.10; // 10% platform fee
                          const net = amount - fee;
                          const payload = typeof txn.request_payload === 'string' ? JSON.parse(txn.request_payload) : txn.request_payload || {};
                          return (
                            <tr key={txn.id} className="border-bottom border-light-subtle">
                              <td className="py-3 px-4 font-monospace fs-8 fw-semibold text-dark" style={{ maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={txn.order_code}>{txn.order_code}</td>
                              <td className="py-3 px-3 font-monospace fs-8 text-secondary" style={{ maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={txn.platform_order_code}>{txn.platform_order_code || '-'}</td>
                              <td className="py-3 px-3">
                                <span className={`badge py-1 px-2.5 fs-9 rounded ${
                                  txn.status === 'success' ? 'bg-success bg-opacity-10 text-success' :
                                  txn.status === 'failed' ? 'bg-danger bg-opacity-10 text-danger' :
                                  'bg-warning bg-opacity-10 text-warning'
                                }`}>
                                  {txn.status.toUpperCase()}
                                </span>
                              </td>
                              <td className="py-3 px-3 fw-semibold text-dark">₹{amount.toFixed(2)}</td>
                              <td className="py-3 px-3 text-secondary">₹{net.toFixed(2)}</td>
                              <td className="py-3 px-3 text-secondary">₹{fee.toFixed(2)}</td>
                              <td className="py-3 px-3 text-dark" style={{ maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={payload.name || 'Customer'}>{payload.name || 'Customer'}</td>
                              <td className="py-3 px-4 text-secondary fs-8">{new Date(txn.created_at).toLocaleString()}</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Withdrawals' && (
            <>
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="fw-bold text-dark mb-0 fs-3">{t('withdrawals')}</h2>
                  <p className="text-secondary fs-7 mb-0">{t('manageWithdrawals')}</p>
                </div>
                <button 
                  onClick={handleOpenWithdrawModal}
                  className="btn btn-success d-flex align-items-center gap-2" 
                  style={{ background: '#10b981', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '500' }}
                >
                  {t('newWithdrawal')}
                </button>
              </div>

              {/* Row of 3 Metrics Cards */}
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-success bg-opacity-10 text-success rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center fw-bold fs-5" style={{ width: '48px', height: '48px' }}>
                        <IndianRupee size={20} />
                      </div>
                      <div>
                        <span className="text-secondary fs-8 d-block font-semibold mb-0.5">{t('availableBalance')}</span>
                        <h4 className="fw-bold text-dark mb-0 fs-4">₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-warning bg-opacity-10 text-warning rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </div>
                      <div>
                        <span className="text-secondary fs-8 d-block font-semibold mb-0.5">{t('pendingRequests')}</span>
                        <h4 className="fw-bold text-dark mb-0 fs-4">{pendingWithdrawalsCount}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card border-0 rounded-3 shadow-sm p-4 bg-white h-100">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <ArrowUpRight size={20} />
                      </div>
                      <div>
                        <span className="text-secondary fs-8 d-block font-semibold mb-0.5">{t('totalWithdrawn')}</span>
                        <h4 className="fw-bold text-dark mb-0 fs-4">₹{totalWithdrawn.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Card */}
              <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
                <h5 className="fw-bold text-dark mb-4">{t('withdrawalHistory')}</h5>

                <div className="table-responsive">
                  <table className="table align-middle mb-0" style={{ '--bs-table-bg': 'transparent', '--bs-table-border-color': '#f1f5f9' }}>
                    <thead>
                      <tr className="text-secondary fs-8 border-bottom border-light-subtle">
                        <th className="py-2 px-3">{t('id')}</th>
                        <th className="py-2 px-3">{t('amount')}</th>
                        <th className="py-2 px-3">{t('usdt')}</th>
                        <th className="py-2 px-3">{t('trc20Address')}</th>
                        <th className="py-2 px-3">{t('status')}</th>
                        <th className="py-2 px-3">{t('txHash')}</th>
                        <th className="py-2 px-3">{t('adminNote')}</th>
                        <th className="py-2 px-3 text-nowrap">{t('date')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {withdrawalsList.length === 0 ? (
                        <tr>
                          <td colSpan="8" className="py-5 text-center text-secondary opacity-60 fs-7">
                            {t('noWithdrawalRequestsYet')}
                          </td>
                        </tr>
                      ) : (
                        withdrawalsList.map((w) => (
                          <tr key={w.id} className="border-bottom border-light-subtle">
                            <td className="py-3 px-3 fw-medium text-dark">{w.id.replace('WID', language === '中文' ? '提现' : 'WID')}</td>
                            <td className="py-3 px-3 text-dark">₹{parseFloat(w.amount).toFixed(2)}</td>
                            <td className="py-3 px-3 text-teal fw-semibold">{w.usdt} {language === '中文' ? '泰达币' : 'USDT'}</td>
                            <td className="py-3 px-3 text-secondary font-monospace fs-8" style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={w.address}>{w.address === 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb' ? (language === '中文' ? '默认波场提现地址' : 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb') : w.address}</td>
                            <td className="py-3 px-3">
                              <span className={`badge rounded-pill px-2.5 py-1 fs-9 ${
                                w.status === 'Pending' ? 'bg-warning bg-opacity-10 text-warning' : 
                                w.status === 'Success' ? 'bg-success bg-opacity-10 text-success' : 
                                'bg-danger bg-opacity-10 text-danger'
                              }`}>
                                {w.status === 'Pending' ? t('pending') : w.status === 'Success' ? t('success') : t('failed')}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-secondary font-monospace fs-8" style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={w.txHash}>{w.txHash === 'Processing...' ? t('processing') : w.txHash}</td>
                            <td className="py-3 px-3 text-secondary fs-8" style={{ maxWidth: '130px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={w.adminNote}>{(w.adminNote === '等待管理员审核' || w.adminNote === 'Awaiting administrator approval') ? t('awaitingAdminApproval') : w.adminNote}</td>
                            <td className="py-3 px-3 text-secondary fs-8 text-nowrap">{w.date}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'API Docs' && (
            <div className="api-docs-section">
              <div>
                <h2 className="fw-bold text-dark mb-0 fs-3">{t('apiDocumentation')}</h2>
                <p className="text-secondary fs-7 mb-0">{t('integratePayzo')}</p>
              </div>

              {/* Sub navigation tabs */}
              <div className="d-flex border-bottom border-light-subtle gap-2 mt-4 mb-3">
                {[
                  { id: 'Auth', label: language === '中文' ? '安全认证' : 'Authentication', icon: Lock },
                  { id: 'Collection', label: language === '中文' ? '代收接口 (Pay-In)' : 'Collection (Pay-In)', icon: ArrowDownLeft },
                  { id: 'Payout', label: language === '中文' ? '代付接口 (Payout)' : 'Payout', icon: ArrowUpRight },
                  { id: 'Webhooks', label: language === '中文' ? '回调通知' : 'Webhooks (Callbacks)', icon: ArrowUpDown },
                  { id: 'Status', label: language === '中文' ? '订单查询 (Status)' : 'Check Status', icon: Check }
                ].map(sub => {
                  const SubIcon = sub.icon;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setApiSubTab(sub.id)}
                      className={`btn btn-sm py-2 px-3 border-0 rounded-0 border-bottom fw-medium d-inline-flex align-items-center gap-2 ${
                        apiSubTab === sub.id 
                          ? 'text-primary border-primary fw-semibold' 
                          : 'text-secondary bg-transparent hover:text-dark'
                      }`}
                      style={{ 
                        fontSize: '13px', 
                        borderBottom: apiSubTab === sub.id ? '2px solid #0ea5e9' : 'none',
                        background: 'none'
                      }}
                    >
                      <SubIcon size={13} className="flex-shrink-0" />
                      <span>{sub.label}</span>
                    </button>
                  );
                })}
              </div>

              {apiSubTab === 'Auth' && (
                <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
                  <h5 className="fw-bold text-dark mb-3">
                    {language === '中文' ? 'API 安全认证' : 'API Authentication'}
                  </h5>
                  <p className="text-secondary fs-7">
                    {language === '中文' 
                      ? '所有的 Payzo API 请求都必须在 HTTP 请求头中包含您的商户凭证。此外，出于安全考虑，您的服务器 IP 地址必须在 Payzo 管理系统中加入白名单。'
                      : 'All Payzo API requests must include your client credentials in the HTTP request headers. Additionally, your origin server IP address must be registered in the Payzo whitelist before making requests.'}
                  </p>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                      {language === '中文' ? '必需的请求头 (Required Headers)' : 'Required HTTP Headers'}
                    </h6>
                    <div className="table-responsive">
                      <table className="table align-middle table-sm fs-8 text-dark">
                        <thead>
                          <tr className="text-secondary border-bottom">
                            <th className="py-2">Header Key</th>
                            <th className="py-2">Type</th>
                            <th className="py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-bottom">
                            <td className="py-2 font-monospace fw-semibold text-primary">x-client-id</td>
                            <td className="py-2">String</td>
                            <td className="py-2">
                              {language === '中文' ? '为您商户分配的唯一客户端 ID' : 'Your unique client identifier assigned by Payzo.'}
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="py-2 font-monospace fw-semibold text-primary">x-client-password</td>
                            <td className="py-2">String</td>
                            <td className="py-2">
                              {language === '中文' ? '为您商户分配的安全客户端密码' : 'Your secret client password assigned by Payzo.'}
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="py-2 font-monospace fw-semibold">Content-Type</td>
                            <td className="py-2">String</td>
                            <td className="py-2"><code className="bg-light px-1 py-0.5 rounded text-dark">application/json</code></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="alert alert-warning border-0 bg-warning bg-opacity-10 text-warning-emphasis fs-8 rounded p-3 mb-0">
                    <strong className="d-block mb-1">{language === '中文' ? 'IP 白名单提示' : 'IP Whitelisting Required'}</strong>
                    {language === '中文' 
                      ? '如果您的请求返回 403 Forbidden，请联系 Payzo 管理员，提供您的源服务器公网 IPv4 地址以进行白名单配置。'
                      : 'If your requests return a 403 Forbidden, please ensure your public production server IPv4 address has been successfully whitelisted by your administrator.'}
                  </div>
                </div>
              )}

              {apiSubTab === 'Collection' && (
                <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-success text-white py-1 px-2.5 font-monospace fs-8">POST</span>
                    <span className="font-monospace fw-bold text-dark fs-7">/api/v1/payment/collection</span>
                  </div>
                  
                  <p className="text-secondary fs-7">
                    {language === '中文' 
                      ? '从您的客户处请求付款收集。该 API 将返回一个交易单号以及一个付款链接地址，客户可通过该链接完成支付。'
                      : 'Request a payment collection from a customer. This API will return a platform order code and a paymentUrl for the customer checkout.'}
                  </p>

                  <div className="row g-4 mt-1">
                    <div className="col-12 col-xl-7">
                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                        {language === '中文' ? '请求体参数 (Request Payload)' : 'Request Body Parameters'}
                      </h6>
                      <div className="table-responsive">
                        <table className="table table-sm align-middle fs-8 text-dark">
                          <thead>
                            <tr className="text-secondary border-bottom">
                              <th>Field</th>
                              <th>Type</th>
                              <th>Required</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">orderCode</td>
                              <td>String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '您系统中的唯一订单号' : 'Unique order ID from your system.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">amount</td>
                              <td>Number/String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '要收集的 INR 金额 (例如 250.00)' : 'Amount to collect in INR (e.g. 250.00).'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">name</td>
                              <td>String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '客户姓名' : 'Customer full name.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">email</td>
                              <td>String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '客户邮箱' : 'Customer email address.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">phone</td>
                              <td>String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '客户手机号' : 'Customer mobile phone.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">remark</td>
                              <td>String</td>
                              <td>No</td>
                              <td>{language === '中文' ? '订单备注或描述说明' : 'Optional description/note for the order.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">notifyUrl</td>
                              <td>String</td>
                              <td>No</td>
                              <td>{language === '中文' ? '支付状态变更时您的服务器接收 Webhook 异步回调的地址' : 'Your server endpoint to receive webhook callback updates.'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="col-12 col-xl-5">
                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                        {language === '中文' ? '请求与响应示例 (JSON Examples)' : 'JSON Request / Response Examples'}
                      </h6>
                      
                      <div className="mb-3">
                        <span className="text-secondary fs-9 fw-semibold uppercase d-block mb-1">{language === '中文' ? '请求 Body (Request Body)' : 'Example Request Payload'}</span>
                        <pre className="bg-light p-3 rounded font-monospace fs-8 text-dark text-start mb-0">
{`{
  "orderCode": "ORDER_67823",
  "amount": "250.00",
  "name": "Customer Name",
  "email": "customer@email.com",
  "phone": "7703977691",
  "remark": "Order #67823 Payout",
  "notifyUrl": "https://yoursite.com/webhook"
}`}
                        </pre>
                      </div>

                      <div>
                        <span className="text-secondary fs-9 fw-semibold uppercase d-block mb-1">{language === '中文' ? '响应 Body (Response Body)' : 'Example Response'}</span>
                        <pre className="bg-light p-3 rounded font-monospace fs-8 text-dark text-start mb-0">
{`{
  "platformOrderCode": "FP20260617122049882",
  "paymentUrl": "https://payzo.com/pay/checkout/9823h89d12d"
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {apiSubTab === 'Payout' && (
                <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-success text-white py-1 px-2.5 font-monospace fs-8">POST</span>
                    <span className="font-monospace fw-bold text-dark fs-7">/api/v1/payment/payout</span>
                  </div>
                  
                  <p className="text-secondary fs-7">
                    {language === '中文' 
                      ? '向商户、供应商或用户发起代付/下发提现申请。支持 银行账户(bank)、统一支付接口(upi) 及 泰达币(usdt) 三种代付渠道。'
                      : 'Create a withdrawal or vendor payout. Payzo supports Bank Transfer (bank), Unified Payments Interface (upi), and USDT (usdt) methods.'}
                  </p>

                  <div className="row g-4 mt-1">
                    <div className="col-12 col-xl-7">
                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                        {language === '中文' ? '请求参数 (Request Payload)' : 'Request Parameters'}
                      </h6>
                      <div className="table-responsive">
                        <table className="table table-sm align-middle fs-8 text-dark">
                          <thead>
                            <tr className="text-secondary border-bottom">
                              <th>Field</th>
                              <th>Type</th>
                              <th>Required</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">orderCode</td>
                              <td>String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '您的唯一代付交易单号' : 'Unique payout reference ID from your system.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">amount</td>
                              <td>Number/String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '下发金额 (INR)' : 'Amount to withdraw in INR.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">method</td>
                              <td>String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td><code className="text-primary fw-bold">bank</code>, <code className="text-primary fw-bold">upi</code>, or <code className="text-primary fw-bold">usdt</code></td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">bankAccountName</td>
                              <td>String</td>
                              <td><span className="text-secondary">For bank</span></td>
                              <td>{language === '中文' ? '收款人银行开户姓名' : 'Bank account holder name.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">bankAccountNumber</td>
                              <td>String</td>
                              <td><span className="text-secondary">For bank</span></td>
                              <td>{language === '中文' ? '收款人银行账号' : 'Bank account number.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">bankIfsc</td>
                              <td>String</td>
                              <td><span className="text-secondary">For bank</span></td>
                              <td>{language === '中文' ? '银行 IFSC 代码' : 'Bank branch IFSC code.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">upiId</td>
                              <td>String</td>
                              <td><span className="text-secondary">For upi</span></td>
                              <td>{language === '中文' ? '收款人 UPI ID / VPA' : 'UPI Virtual Private Address (VPA).'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">trc20Address</td>
                              <td>String</td>
                              <td><span className="text-secondary">For usdt</span></td>
                              <td>{language === '中文' ? '收款人波场 TRC20 USDT 地址' : 'Recipient TRC20 USDT wallet address.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">notifyUrl</td>
                              <td>String</td>
                              <td>No</td>
                              <td>{language === '中文' ? '回调通知的接收地址' : 'Your server webhook callback URL.'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="col-12 col-xl-5">
                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                        {language === '中文' ? '示例请求体 (Example Payout Request)' : 'Example Payout JSON'}
                      </h6>
                      
                      <div className="mb-3">
                        <span className="text-secondary fs-9 fw-semibold uppercase d-block mb-1">{language === '中文' ? '银行卡代付请求 (Bank Payout Request)' : 'Bank Method Payload'}</span>
                        <pre className="bg-light p-3 rounded font-monospace fs-8 text-dark text-start mb-0">
{`{
  "orderCode": "PAYOUT_9812A",
  "amount": "5000.00",
  "method": "bank",
  "bankAccountName": "John Doe",
  "bankAccountNumber": "918239081231",
  "bankIfsc": "SBIN0001234",
  "remark": "Vendor Payout"
}`}
                        </pre>
                      </div>

                      <div>
                        <span className="text-secondary fs-9 fw-semibold uppercase d-block mb-1">{language === '中文' ? 'USDT 提现请求 (USDT Payout Request)' : 'USDT Method Payload'}</span>
                        <pre className="bg-light p-3 rounded font-monospace fs-8 text-dark text-start mb-0">
{`{
  "orderCode": "PAYOUT_9812B",
  "amount": "10000.00",
  "method": "usdt",
  "trc20Address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {apiSubTab === 'Webhooks' && (
                <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
                  <h5 className="fw-bold text-dark mb-3">
                    {language === '中文' ? '异步回调通知 (Webhooks)' : 'Asynchronous Callback Notifications'}
                  </h5>
                  <p className="text-secondary fs-7">
                    {language === '中文' 
                      ? '当代收 (Pay-In) 客户支付成功或失败，以及代付 (Payout) 提现订单状态发生改变时，我们的服务器将自动以 POST 形式向您提交的 "notifyUrl" 发送实时 JSON 数据更新。'
                      : 'When a collection (Pay-In) completes or fails, or when a payout status changes, Payzo automatically sends a POST request with details to your provided "notifyUrl".'}
                  </p>

                  <div className="mb-4">
                    <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                      {language === '中文' ? '回调 Payload 结构 (Callback Body Structure)' : 'Callback JSON Payload'}
                    </h6>
                    <pre className="bg-light p-3 rounded font-monospace fs-8 text-dark text-start mb-0">
{`{
  "merchantLogin": "${merchantId}",
  "orderCode": "ORDER_67823",
  "platformOrderCode": "FP20260617122049882",
  "amount": "250.00",
  "status": "success",
  "remark": "Order #67823 Payout",
  "sign": "38a7c29e2f89c017d7bca8d91f27cd"
}`}
                    </pre>
                  </div>

                  <div className="alert alert-success border-0 bg-success bg-opacity-10 text-success-emphasis fs-8 rounded p-3 mb-0">
                    <strong className="d-block mb-1">{language === '中文' ? '接收回调应答' : 'Responding to Callbacks'}</strong>
                    {language === '中文' 
                      ? '您的接收服务器必须在 5 秒内响应 HTTP 状态码 200，并返回 JSON 响应: {"success": true}。否则系统可能会将此标记为发送失败，并按策略重试。'
                      : 'Your callback receiver endpoint should respond with an HTTP status code 200 within 5 seconds to acknowledge receipt of the payment update.'}
                  </div>
                </div>
              )}

              {apiSubTab === 'Status' && (
                <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-success text-white py-1 px-2.5 font-monospace fs-8">POST</span>
                    <span className="font-monospace fw-bold text-dark fs-7">/api/v1/payment/status</span>
                  </div>
                  
                  <p className="text-secondary fs-7">
                    {language === '中文' 
                      ? '通过您原始代收代付交易中的 "orderCode" 查询其实时交易状态。此 API 允许您的系统随时同步状态。'
                      : 'Check the real-time status of any payment or payout by sending your original "orderCode". This API allows your system to manually poll status at any time.'}
                  </p>

                  <div className="row g-4 mt-1">
                    <div className="col-12 col-xl-7">
                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                        {language === '中文' ? '请求体参数 (Request Payload)' : 'Request Body Parameters'}
                      </h6>
                      <div className="table-responsive">
                        <table className="table table-sm align-middle fs-8 text-dark">
                          <thead>
                            <tr className="text-secondary border-bottom">
                              <th>Field</th>
                              <th>Type</th>
                              <th>Required</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">orderCode</td>
                              <td>String</td>
                              <td><span className="text-danger fw-semibold">Yes</span></td>
                              <td>{language === '中文' ? '您系统发起交易时提供的原始交易单号' : 'The original unique order code of the transaction.'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2 mt-4">
                        {language === '中文' ? '响应体字段 (Response Parameters)' : 'Response Parameters'}
                      </h6>
                      <div className="table-responsive">
                        <table className="table table-sm align-middle fs-8 text-dark">
                          <thead>
                            <tr className="text-secondary border-bottom">
                              <th>Field</th>
                              <th>Type</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">orderCode</td>
                              <td>String</td>
                              <td>{language === '中文' ? '您的原始交易单号' : 'Your original unique order code.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">platformOrderCode</td>
                              <td>String</td>
                              <td>{language === '中文' ? '支付网关系统分配的唯一交易单号' : 'Unique system-generated transaction identifier.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">status</td>
                              <td>String</td>
                              <td>
                                <code className="text-success fw-bold">success</code>, <code className="text-warning fw-bold">pending</code>, or <code className="text-danger fw-bold">failed</code>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">amount</td>
                              <td>String</td>
                              <td>{language === '中文' ? '订单原始请求金额' : 'Original requested transaction amount.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">paidAmount</td>
                              <td>String</td>
                              <td>{language === '中文' ? '客户实际支付的金额' : 'Actual amount paid by the customer.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">netAmount</td>
                              <td>String</td>
                              <td>{language === '中文' ? '扣除手续费后计入您商户账户的净额' : 'Net credited amount after platform charges.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">chargeAmount</td>
                              <td>String</td>
                              <td>{language === '中文' ? '本次交易所收取的平台手续费金额' : 'Flat fees deducted for this transaction.'}</td>
                            </tr>
                            <tr className="border-bottom">
                              <td className="font-monospace fw-semibold py-2">chargePercent</td>
                              <td>String</td>
                              <td>{language === '中文' ? '本次交易所收取的平台手续费比例' : 'Percentage fee rate charged (e.g. 10.00).'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="col-12 col-xl-5">
                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                        {language === '中文' ? '示例请求 (Example Request)' : 'Example Curl Request'}
                      </h6>
                      <pre className="bg-light p-3 rounded font-monospace fs-8 text-dark text-start mb-4 overflow-x-auto">
{`curl -X POST http://localhost:4000/api/v1/payment/status \\
  -H "Content-Type: application/json" \\
  -H "x-client-id: ${username}" \\
  -H "x-client-password: YourSecretPassword" \\
  -d '{"orderCode": "ORD_FP_78192"}'`}
                      </pre>

                      <h6 className="fw-bold text-dark fs-8 uppercase tracking-wider mb-2">
                        {language === '中文' ? '示例 JSON 响应 (Example JSON Response)' : 'Example JSON Response'}
                      </h6>
                      <pre className="bg-light p-3 rounded font-monospace fs-8 text-dark text-start mb-0 overflow-x-auto">
{`{
  "orderCode": "ORD_FP_78192",
  "platformOrderCode": "FP20260616122049882",
  "status": "success",
  "amount": "1500000.00",
  "paidAmount": "1500000.00",
  "netAmount": "1350000.00",
  "chargeAmount": "150000.00",
  "chargePercent": "10.00"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'Transactions' && (
            <>
              {/* Header */}
              <div>
                <h2 className="fw-bold text-dark mb-0 fs-3">{t('transactions')}</h2>
                <p className="text-secondary fs-7 mb-0">{language === '中文' ? '在一个地方跟踪所有的代收和代付交易记录。' : 'Track all your collection and payout transactions in a single unified log.'}</p>
              </div>

              {/* Table Card */}
              <div className="card border-0 rounded-3 shadow-sm p-4 bg-white">
                <div className="table-responsive">
                  <table className="table align-middle mb-0" style={{ '--bs-table-bg': 'transparent', '--bs-table-border-color': '#f1f5f9' }}>
                    <thead>
                      <tr className="text-secondary fs-8 border-bottom border-light-subtle">
                        <th className="py-2 px-3">{language === '中文' ? '交易类型' : 'Type'}</th>
                        <th className="py-2 px-3">{language === '中文' ? '商户订单号' : 'Order Code'}</th>
                        <th className="py-2 px-3">{language === '中文' ? '系统单号' : 'Platform Code'}</th>
                        <th className="py-2 px-3">{language === '中文' ? '交易金额' : 'Amount'}</th>
                        <th className="py-2 px-3">{language === '中文' ? '渠道/方式' : 'Method'}</th>
                        <th className="py-2 px-3">{language === '中文' ? '交易状态' : 'Status'}</th>
                        <th className="py-2 px-3 text-nowrap">{language === '中文' ? '创建时间' : 'Date'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionsList.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="py-5 text-center text-secondary opacity-60 fs-7">
                            {language === '中文' ? '暂无交易记录' : 'No transactions found.'}
                          </td>
                        </tr>
                      ) : (
                        transactionsList.map((t) => {
                          const isCollection = t.type === 'collection';
                          const amount = parseFloat(t.amount);
                          return (
                            <tr key={t.id} className="border-bottom border-light-subtle">
                              <td className="py-3 px-3">
                                <span className={`d-inline-flex align-items-center gap-1 fw-semibold ${isCollection ? 'text-success' : 'text-primary'}`}>
                                  {isCollection ? (
                                    <>
                                      <ArrowDownLeft size={14} />
                                      {language === '中文' ? '代收' : 'Pay-in'}
                                    </>
                                  ) : (
                                    <>
                                      <ArrowUpRight size={14} />
                                      {language === '中文' ? '代付' : 'Payout'}
                                    </>
                                  )}
                                </span>
                              </td>
                              <td className="py-3 px-3 font-monospace fs-8 text-dark fw-semibold" style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={t.order_code}>{t.order_code}</td>
                              <td className="py-3 px-3 font-monospace fs-8 text-secondary" style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={t.platform_order_code}>{t.platform_order_code || '-'}</td>
                              <td className={`py-3 px-3 fw-bold ${isCollection ? 'text-success' : 'text-dark'}`}>
                                {isCollection ? '+' : '-'}₹{amount.toFixed(2)}
                              </td>
                              <td className="py-3 px-3 text-capitalize text-secondary fs-8">{t.method || '-'}</td>
                              <td className="py-3 px-3">
                                <span className={`badge py-1 px-2.5 fs-9 rounded ${
                                  t.status === 'success' ? 'bg-success bg-opacity-10 text-success' :
                                  t.status === 'failed' ? 'bg-danger bg-opacity-10 text-danger' :
                                  'bg-warning bg-opacity-10 text-warning'
                                }`}>
                                  {t.status.toUpperCase()}
                                </span>
                              </td>
                              <td className="py-3 px-3 text-secondary fs-8 text-nowrap">{new Date(t.created_at).toLocaleString()}</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

        </main>
        
      </div>

      {/* Withdrawal Modal */}
      {isWithdrawModalOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.6)', 
            backdropFilter: 'blur(4px)', 
            zIndex: 9999 
          }}
        >
          <div 
            className="card border-0 rounded-4 shadow-lg p-4 bg-white m-3" 
            style={{ maxWidth: '480px', width: '100%' }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-dark mb-0">{language === '中文' ? '申请新提现' : 'Request New Withdrawal'}</h5>
              <button 
                onClick={() => setIsWithdrawModalOpen(false)}
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            
            <form onSubmit={handleNewWithdrawalSubmit} className="d-flex flex-column gap-3">
              <div>
                <label className="text-secondary fs-8 fw-semibold mb-2 d-block">
                  {language === '中文' ? '提现金额 (INR)' : 'Withdrawal Amount (INR)'}
                </label>
                <div className="position-relative">
                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder={language === '中文' ? '输入 INR 金额' : 'Enter amount in INR'}
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '12px 14px',
                      fontSize: '14px'
                    }}
                    required
                  />
                  <span className="position-absolute end-0 top-50 translate-middle-y pe-3 text-secondary fs-8 font-medium">
                    INR
                  </span>
                </div>
                <div className="d-flex flex-column gap-1 mt-2 fs-8 text-secondary">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{language === '中文' ? '可用余额' : 'Available Wallet Balance'}: ₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    {withdrawAmount > 0 && (
                      <span className="text-success fw-medium">
                        ≈ {(withdrawAmount / 90).toFixed(2)} {language === '中文' ? '泰达币' : 'USDT'}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-secondary fs-8 fw-semibold mb-2 d-block">
                  {language === '中文' ? '波场泰达币提现地址' : 'TRC20 USDT Address'}
                </label>
                <input 
                  type="text" 
                  className="form-control font-monospace fs-8" 
                  placeholder={language === '中文' ? '输入波场泰达币提现地址' : 'Enter TRC20 USDT Address'}
                  value={withdrawAddress}
                  onChange={(e) => setWithdrawAddress(e.target.value)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '12px 14px',
                  }}
                  required
                />
              </div>

              <div className="mt-2 d-flex gap-2">
                <button 
                  type="button" 
                  onClick={() => setIsWithdrawModalOpen(false)}
                  className="btn btn-light border flex-grow-1 py-2.5 fw-semibold fs-7 rounded-3"
                >
                  {language === '中文' ? '取消' : 'Cancel'}
                </button>
                <button 
                  type="submit" 
                  className="btn btn-success text-white flex-grow-1 py-2.5 fw-semibold fs-7 rounded-3"
                  style={{ backgroundColor: '#10b981', border: 'none' }}
                >
                  {language === '中文' ? '确认提现' : 'Submit Withdrawal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}
