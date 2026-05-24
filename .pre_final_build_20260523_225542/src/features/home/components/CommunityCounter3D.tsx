'use client';
'use client';
'use client';
// Static community badge – no animations for faster loading
export function CommunityCounter3D() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-prakash-gold/40 shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="text-prakash-gold text-xl">✦</span>
          <span className="font-serif text-3xl sm:text-4xl font-bold text-white drop-shadow-2xl">80k+</span>
          <span className="text-white/80 text-base uppercase tracking-wider">Community</span>
          <span className="text-prakash-gold text-xl">✦</span>
        </div>
      </div>
    </div>
  );
}
export default CommunityCounter3D;
