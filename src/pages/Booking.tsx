import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ROOMS } from '@/data/mockData';

export function Booking() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [roomType, setRoomType] = useState(ROOMS[0].id);
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedRoom = ROOMS.find(r => r.id === roomType);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (nights > 0) {
      setStep(2);
    } else {
      alert("Please select valid dates");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Booking confirmed! (Mock)");
      setStep(1);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-ink-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Reservation
          </motion.h1>
          <div className="flex justify-center items-center space-x-4 text-sm text-beige-200/50 uppercase tracking-widest">
            <span className={step === 1 ? 'text-gold-500 font-medium' : ''}>1. Search</span>
            <span>&mdash;</span>
            <span className={step === 2 ? 'text-gold-500 font-medium' : ''}>2. Confirm</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-ink-800 p-8 md:p-12 border border-ink-700"
        >
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Check-in</label>
                  <input 
                    type="date" 
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Check-out</label>
                  <input 
                    type="date" 
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn}
                    className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Adults</label>
                  <select 
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Children</label>
                  <select 
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors appearance-none"
                  >
                    {[0, 1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Room Type</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ROOMS.map(room => (
                    <div 
                      key={room.id}
                      className={`border p-4 cursor-pointer transition-colors ${roomType === room.id ? 'border-gold-500 bg-ink-900' : 'border-ink-700 hover:border-gold-500/50'}`}
                      onClick={() => setRoomType(room.id)}
                    >
                      <h3 className="font-serif text-white mb-1">{room.name}</h3>
                      <p className="text-gold-500 text-sm">${room.price} / night</p>
                    </div>
                  ))}
                </div>
              </div>

              {nights > 0 && selectedRoom && (
                <div className="bg-ink-900 p-6 border border-ink-700 flex justify-between items-center">
                  <div>
                    <p className="text-beige-200/70 text-sm">Total for {nights} night{nights > 1 ? 's' : ''}</p>
                    <p className="text-2xl font-serif text-white">${totalPrice}</p>
                  </div>
                  <button 
                    type="submit"
                    className="bg-gold-500 text-ink-900 uppercase tracking-widest px-8 py-3 text-sm font-medium hover:bg-white transition-colors"
                  >
                    Continue
                  </button>
                </div>
              )}
            </form>
          )}

          {step === 2 && selectedRoom && (
             <form onSubmit={handleSubmit} className="space-y-8">
               <div className="bg-ink-900 p-6 border border-ink-700 mb-8">
                 <h3 className="font-serif text-xl text-white mb-4 border-b border-ink-800 pb-4">Booking Summary</h3>
                 <div className="grid grid-cols-2 gap-y-4 text-sm text-beige-200/80 mb-6">
                   <div>
                     <span className="block text-xs text-beige-200/50 uppercase tracking-widest mb-1">Check-in</span>
                     {checkIn}
                   </div>
                   <div>
                     <span className="block text-xs text-beige-200/50 uppercase tracking-widest mb-1">Check-out</span>
                     {checkOut}
                   </div>
                   <div>
                     <span className="block text-xs text-beige-200/50 uppercase tracking-widest mb-1">Guests</span>
                     {adults} Adults, {children} Children
                   </div>
                   <div>
                     <span className="block text-xs text-beige-200/50 uppercase tracking-widest mb-1">Room</span>
                     {selectedRoom.name}
                   </div>
                 </div>
                 <div className="border-t border-ink-800 pt-4 flex justify-between items-center">
                   <span className="text-white font-medium">Total Price</span>
                   <span className="text-2xl font-serif text-gold-500">${totalPrice}</span>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">First Name</label>
                   <input type="text" required className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none" />
                 </div>
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Last Name</label>
                   <input type="text" required className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Email Address</label>
                   <input type="email" required className="w-full bg-ink-900 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none" />
                 </div>
               </div>

               <div className="flex space-x-4">
                 <button 
                   type="button"
                   onClick={() => setStep(1)}
                   className="border border-ink-700 text-beige-200 uppercase tracking-widest px-8 py-3 text-sm font-medium hover:border-gold-500 transition-colors"
                 >
                   Back
                 </button>
                 <button 
                   type="submit"
                   disabled={isSubmitting}
                   className="flex-1 bg-gold-500 text-ink-900 uppercase tracking-widest px-8 py-3 text-sm font-medium hover:bg-white transition-colors disabled:opacity-50"
                 >
                   {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                 </button>
               </div>
             </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
