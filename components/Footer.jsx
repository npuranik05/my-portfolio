export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-xs sm:text-sm text-neutral-500">
          © {new Date().getFullYear()} Nishant Puranik
        </p>
      </div>
    </footer>
  )
}
