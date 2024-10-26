export default function Home() {
  return (
    <>
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 bg-background">
      <div className="min-h-[120px] bg-primary-400">
        <h2>This is a homepage</h2>
      </div>
      <div className="min-h-[120px] bg-primary-500">
        <h2>This is a homepage</h2>
      </div>
      <div className="min-h-[120px] bg-primary-300">
        <h2>This is a homepage</h2>
      </div>
      <div className="min-h-[120px] bg-primary-700">
        <h2>This is a homepage</h2>
      </div>
    
    </section>
      <div className="min-h-[120px] bg-secondary-50 p-4 mx-5 group">
      <h2 className="group-hover:bg-primary-600">This is a Secondary Component</h2>
    </div>
    <div className="min-h-[120px] bg-secondary-100 p-4 mx-5 peer-hover:bg-primary-600">
    <label class="block">
    <span class="block text-[40px] font-medium text-slate-700">Email</span>
    <input type="email" class="peer px-4"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
    </div>
    </>
  );
}