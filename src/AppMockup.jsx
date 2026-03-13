import React from 'react';

const AppMockup = () => {
  return (
    <div style={{
      width: '393px', // iPhone 15 Pro width
      height: '852px', // iPhone 15 Pro height
      backgroundColor: '#0a0a0a',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Status Bar Mockup */}
      <div style={{ height: '54px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', fontSize: '15px', fontWeight: '600' }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.5C1.5 9.5 2 9 2 8.5C2 8 1.5 7.5 1 7.5C0.5 7.5 0 8 0 8.5C0 9 0.5 9.5 1 9.5ZM5 9.5C5.5 9.5 6 9 6 8.5C6 7.5 5.5 6.5 5 6.5C4.5 6.5 4 7.5 4 8.5C4 9 4.5 9.5 5 9.5ZM9 9.5C9.5 9.5 10 9 10 8.5C10 7 9.5 6 9 6C8.5 6 8 7 8 8.5C8 9 8.5 9.5 9 9.5ZM13 9.5C13.5 9.5 14 9 14 8.5C14 6.5 13.5 5 13 5C12.5 5 12 6.5 12 8.5C12 9 12.5 9.5 13 9.5ZM17 9.5C17.5 9.5 18 9 18 8.5C18 5.5 17.5 4 17 4C16.5 4 16 5.5 16 8.5C16 9 16.5 9.5 17 9.5Z" fill="white"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.3 0 0 3 0 3L8 12L16 3C16 3 12.7 0 8 0Z" fill="white"/></svg>
          <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="21" height="10" rx="3" stroke="white" strokeWidth="1"/><rect x="3" y="3" width="17" height="6" rx="1.5" fill="white"/><path d="M23 4C24.1046 4 25 4.89543 25 6C25 7.10457 24.1046 8 23 8V4Z" fill="white"/></svg>
        </div>
      </div>

      {/* Dynamic Island */}
      <div style={{ position: 'absolute', top: '11px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '32px', backgroundColor: '#000', borderRadius: '16px' }}></div>

      {/* Main Content: GuessPicksView */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', textAlign: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '40px', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}></div>
            <div style={{ width: '40px', height: '6px', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', borderRadius: '3px' }}></div>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '1px' }}>🎬 Movies</span>
          <h1 style={{ fontSize: '28px', fontWeight: '800', margin: '4px 0 0 0', letterSpacing: '-0.5px' }}>Guess Alex's Top 3</h1>
          <p style={{ fontSize: '15px', color: '#a1a1aa', margin: 0 }}>What do YOU think they picked?</p>
        </div>

        {/* Grid of Items */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { tag: 'Action', emoji: '💥', title: 'The Dark Knight' },
            { tag: 'Sci-Fi', emoji: '👽', title: 'Interstellar', selected: 1 },
            { tag: 'Drama', emoji: '🎭', title: 'The Godfather' },
            { tag: 'Sci-Fi', emoji: '🚀', title: 'Dune', selected: 2 },
            { tag: 'Comedy', emoji: '😂', title: 'Superbad' },
            { tag: 'Thriller', emoji: '🔪', title: 'Parasite' }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: item.selected ? 'transparent' : 'rgba(255,255,255,0.05)',
              background: item.selected ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))' : '',
              border: item.selected ? '2px solid #a855f7' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              aspectRatio: '1',
              position: 'relative'
            }}>
              {item.selected && (
                <div style={{ position: 'absolute', top: '12px', right: '12px', width: '24px', height: '24px', borderRadius: '12px', backgroundColor: '#a855f7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>
                  {item.selected}
                </div>
              )}
              <span style={{ fontSize: '32px', marginBottom: 'auto' }}>{item.emoji}</span>
              <span style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: '600' }}>{item.tag}</span>
              <span style={{ fontSize: '15px', fontWeight: '700', marginTop: '4px' }}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sticky Area */}
      <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(20px)', paddingBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '20px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600', color: '#3b82f6' }}>1. Interstellar</div>
          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '20px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600', color: '#a855f7' }}>2. Dune</div>
          <div style={{ flex: 1, border: '1px dashed rgba(255,255,255,0.3)', borderRadius: '20px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a' }}>—</div>
        </div>
        
        <div style={{ width: '100%', height: '56px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa', fontSize: '17px', fontWeight: '600' }}>
          1 more to guess
        </div>
      </div>
    </div>
  );
};

export default AppMockup;
