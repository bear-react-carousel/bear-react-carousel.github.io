import useBaseUrl from '@docusaurus/useBaseUrl';

interface IObject {
    [key: string]: string;
}


// 初始的六個付款類別選項
// export const stepOneDataDefault: IObject = {
//     'bank' : 'Bank',
//     'phpBank': 'Bank+',
//     'eWallet': 'e-Wallet',
//     'fpx': 'FPX',
//     'iCard': 'iCARD',
//     'crypto': 'Crypto',
// };

export enum EGroupCode {
    bank = 'bank',
    eWallet = 'eWallet',
    fpx = 'fpx',
    crypto = 'crypto',
    phpBank = 'phpBank',
    iCard = 'iCard',
}


interface DepositConfig {
    name: string,
    image: string,
}

export const groupConfig: Record<EGroupCode, DepositConfig> = {
    [EGroupCode.bank]: {
        name: 'Bank',
        image: '/img/deposit/group/bank.svg',
    },
    [EGroupCode.eWallet]: {
        name: 'EWallet',
        image: '/img/deposit/group/e_wallet.svg',
    },
    [EGroupCode.fpx]: {
        name: 'FPX',
        image: '/img/deposit/group/fpx.svg',
    },
    [EGroupCode.crypto]: {
        name: 'Crypto',
        image: '/img/deposit/group/crypto.svg',
    },
    [EGroupCode.phpBank]: {
        name: 'PHP Bank',
        image: '/img/deposit/group/php_bank.svg',
    },
    [EGroupCode.iCard]: {
        name: 'iCard',
        image: '/img/deposit/group/icard.svg',
    },
}


export enum EMethodCode {
    WebBankPlus = 'WebBankPlus',
    BankPlus = 'BankPlus',
    WebBankAlipayPlus = 'WebBankAlipayPlus',
    WebBankWeChatPlus = 'WebBankWeChatPlus',
    WebBankTrueMoneyPlus = 'WebBankTrueMoneyPlus',
    DuitNowQR = 'DuitNowQR',
    TNGP = 'TNGP',
    TNGP2 = 'TNGP2',
    MultiGCash = 'MultiGCash',
    WebBankMoMoPayPlus = 'WebBankMoMoPayPlus',
    GrabPay = 'GrabPay',
    PayMaya = 'PayMaya',
    Aibo = 'Aibo',
    iPay = 'iPay',
    CryptoCurrency = 'CryptoCurrency',
    iCard = 'iCard',
    PHPBank = 'PHPBank',
}

export const methodConfig: Record<EMethodCode, DepositConfig> = {
    [EMethodCode.WebBankPlus]: {
        name: 'Online Bank',
        image: '/img/deposit/method/web_bank_plus.svg',
    },
    [EMethodCode.BankPlus]: {
        name: 'BankPlus',
        image: '/img/deposit/method/bank_plus.svg',
    },
    [EMethodCode.WebBankAlipayPlus]: {
        name: 'AlipayPlus',
        image: '/img/deposit/method/web_bank_alipay_plus.svg',
    },
    [EMethodCode.WebBankWeChatPlus]: {
        name: 'WeChat',
        image: '/img/deposit/method/web_bank_we_chat_plus.svg',
    },
    [EMethodCode.WebBankTrueMoneyPlus]: {
        name: 'WebBankTrueMoneyPlus',
        image: '/img/deposit/method/web_bank_true_money_plus.svg',
    },
    [EMethodCode.DuitNowQR]: {
        name: 'DuitNowQR',
        image: '/img/deposit/method/duit_now_qr.svg',
    },
    [EMethodCode.TNGP]: {
        name: 'TNGP',
        image: '/img/deposit/method/tngp.svg',
    },
    [EMethodCode.TNGP2]: {
        name: 'TNGP2',
        image: '/img/deposit/method/tngp.svg',
    },
    [EMethodCode.MultiGCash]: {
        name: 'MultiGCash',
        image: '/img/deposit/method/multi_gcash.svg',
    },
    [EMethodCode.WebBankMoMoPayPlus]: {
        name: 'WebBankMoMoPayPlus',
        image: '/img/deposit/method/web_bank_momo_pay_plus.svg',
    },
    [EMethodCode.GrabPay]: {
        name: 'GrabPay',
        image: '/img/deposit/method/grab_pay.svg',
    },
    [EMethodCode.PayMaya]: {
        name: 'PayMaya',
        image: '/img/deposit/method/pay_maya.svg',
    },
    [EMethodCode.Aibo]: {
        name: 'Aibo',
        image: '/img/deposit/method/aibo.svg',
    },
    [EMethodCode.iPay]: {
        name: 'iPay',
        image: '/img/deposit/method/ipay.svg',
    },
    [EMethodCode.CryptoCurrency]: {
        name: 'CryptoCurrency',
        image: '/img/deposit/method/common.svg',
    },
    [EMethodCode.iCard]: {
        name: 'iCard',
        image: '/img/deposit/method/icard.svg',
    },
    [EMethodCode.PHPBank]: {
        name: 'PHPBank',
        image: '/img/deposit/method/php_bank.svg',
    },
}


interface IDeposit {
    code: string;
    name: string;
    groupCode: EGroupCode;
}




export const apiData: IDeposit[] = [
    {
        code: 'WebBankPlus',
        name: 'Online Bank',
        groupCode: EGroupCode.bank
    },
    {
        code: 'BankPlus',
        name: 'ATM / Cash',
        groupCode: EGroupCode.bank
    },
    {
        code: 'WebBankAlipayPlus',
        name: 'Ali Pay',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'WebBankWeChatPlus',
        name: 'WeChat Pay',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'WebBankTrueMoneyPlus',
        name: 'True Money',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'DuitNowQR',
        name: 'Duit Now',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'TNGP',
        name: 'E-wallet QR pay',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'TNGP2',
        name: 'Touch ‘n Go',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'MultiGCash',
        name: 'GCash',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'WebBankMoMoPayPlus',
        name: 'MOMO Pay',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'GrabPay',
        name: 'Grab Pay',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'PayMaya',
        name: 'PayMaya',
        groupCode: EGroupCode.eWallet
    },
    {
        code: 'Aibo',
        name: 'True Pay',
        groupCode: EGroupCode.fpx
    },
    {
        code: 'iPay',
        name: 'd.pay',
        groupCode: EGroupCode.fpx
    },
    {
        code: 'CryptoCurrency',
        name: 'CryptoCurrency',
        groupCode: EGroupCode.crypto
    },
    {
        code: 'iCard',
        name: 'iCARD',
        groupCode: EGroupCode.iCard
    },
    {
        code: 'PHPBank',
        name: 'Bank+',
        groupCode: EGroupCode.phpBank
    }
];
