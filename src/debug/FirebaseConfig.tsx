// 临时调试组件 - 验证Firebase配置
export function FirebaseConfigDebug() {
  const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  console.log('Firebase配置检查:', config);

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '20px', 
      zIndex: 9999,
      fontSize: '12px',
      fontFamily: 'monospace'
    }}>
      <h3>Firebase配置调试</h3>
      <div>API Key: {config.apiKey ? '✅ 已设置' : '❌ 未设置'}</div>
      <div>Auth Domain: {config.authDomain ? '✅ 已设置' : '❌ 未设置'}</div>
      <div>Project ID: {config.projectId ? '✅ 已设置' : '❌ 未设置'}</div>
      <div>Storage Bucket: {config.storageBucket ? '✅ 已设置' : '❌ 未设置'}</div>
      <div>Messaging Sender ID: {config.messagingSenderId ? '✅ 已设置' : '❌ 未设置'}</div>
      <div>App ID: {config.appId ? '✅ 已设置' : '❌ 未设置'}</div>
      <div style={{ marginTop: '10px', color: 'yellow' }}>
        检查控制台日志以查看完整配置
      </div>
    </div>
  );
} 