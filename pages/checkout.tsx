import Link from 'next/link';

export default function Checkout() {
    return (
        <div className='bg-slate-700'>
            <div className="">
                <div>
                    <div className=" text-white font-semibold text-center text-4xl pt-2 p-4 bg-oma-dark">
                        Laurin verkkokauppa
                    </div>
                </div>
            </div>
            <div className="p-2 rounded-br-xl bg-oma justify-around flex">
            <div className="w-28"></div>
                <Link href="/">
                    <button className="bg-slate-400 w-28 text-black hover:bg-slate-200 active:bg-white 
                       font-semibold py-2 pt-1 px-2 border border-slate-900
                       hover:border-transparent rounded-2xl">
                        Kauppaan
                    </button>
                </Link>
                

            </div>

        </div>
    )
}