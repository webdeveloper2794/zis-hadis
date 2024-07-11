import React from 'react'

const Page = () => {
  return (
    <div className='text-4xl text-slate-900 text-center min-h-screen pt-20 w-full p-4 md:p-10 md:pt-20 max-w-screen-xl'>
      <header className='w-full   flex justify-between'>
        <h1 className='text-xl'><span className='m-1'>1.</span>Risolat</h1>
        <h1 className='text-xl'>كتاب بدء الوحى</h1>
      </header>
      <section className='flex flex-wrap justify-between my-4 '>
        <h1 className='text-base'><span className='m-2'>1.Bob: </span>How the Divine Revelation started being revealed to Allah&apos;s Messenger</h1>
        <h1 className='text-lg text-right '> باب كَيْفَ كَانَ بَدْءُ الْوَحْىِ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم </h1>
      </section>
      <section className='flex flex-wrap justify-between my-4'>
        <h1 className='text-xl text-right  w-full' dir="rtl"> وَقَوْلُ اللَّهِ جَلَّ ذِكْرُهُ: إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَى نُوحٍ وَالنَّبِيِّينَ مِنْ بَعْدِهِ</h1>
      </section>
      <main className='bg-white shadow-xl p-2 text-left w-full rounded-md'>
        <p className='text-sm font-semibold text-green-900'>Umar ibn Al-Xattobdan:</p>

        <article className='flex flex-col md:flex-row justify-between items-center gap-2'>
          <div role="tablist" className="tabs tabs-boxed bg-white max-w-[40rem]">
            <input type="radio" name="my_tabs_1" role="tab" className="tab text-gray-800" aria-label="O'zbekcha" defaultChecked/>
            <div role="tabpanel" className="tab-content p-2   ">
              <p className='text-sm md:text-sm text-justify'>
                Men Rasululloh (ﷺ)ning shunday deganini eshitdim: &apos;Amallarning mukofoti niyatlarga bog&apos;liq va har bir kishi niyatiga qarab mukofot oladi. Kim dunyoviy manfaatlar uchun yoki bir ayolga uylanish uchun hijrat qilgan bo&apos;lsa, uning hijrati nima uchun hijrat qilgan bo&apos;lsa, shunga qarab bo&apos;ladi.&apos;
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Узбекча"
               />
            <div role="tabpanel" className="tab-content p-2">
              <p className='text-sm  text-justify'>
                Мен Расулуллоҳ (ﷺ)нинг шундай деганини эшитдим: &apos;Амалларнинг мукофоти ниятларга боғлиқ ва ҳар бир киши ниятига қараб мукофот олади. Ким дунёвий манфаатлар учун ёки бир аёлга уйланиш учун ҳижрат қилган бўлса, унинг ҳижрати нима учун ҳижрат қилган бўлса, шунга қараб бўлади.&apos;
              </p>
            </div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="English" />
            <div role="tabpanel" className="tab-content p-2">
              <p className='text-sm text-justify'>
                I heard Allah&apos;s Messenger (ﷺ) saying, &quot;The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for.&quot;
              </p>
            </div>
          </div>
          <div className='p-2 max-w-[40rem] pt-10'>
            <p className='text-base text-justify' style={{ textAlignLast: "right"}}>
              حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ ، قَالَ : حَدَّثَنَا سُفْيَانُ ، قَالَ : حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْأَنْصَارِيُّ ، قَالَ : أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ ، يَقُولُ : سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِ، قَالَ : سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، يَقُولُ : &quot; إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ &quot;
            </p>
          </div>

        </article>
        <footer className='p-4'>
          <p className='text-xs text-left text-green-900'>
            Sahih al-Buxoriy 1-jild
          </p>
          <p className='text-xs text-left text-green-900'>
            1-kitob, 1-hadis
          </p>


        </footer>
      </main>
    </div>
  )
}

export default page
