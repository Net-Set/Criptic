'use client';

import React from 'react';
import Image from 'next/image'; // Importing Image component from Next.js for better optimization
import registrationPrev from '@/assets/images/program.jpg';
import registration from '@/assets/images/registration.png';
import x3_preview from '@/assets/images/x3 previw.png';
import x4_prpgram from '@/assets/images/x4_program.png';


// Import the image directly
import DecentralizationImage from 'src/assets/images/Instruction/decentralization.webp';

const Instruction: React.FC = () => {
  return (
    //Change the content of the page which is written in the below div and copied this content

    <>
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-5 dark:bg-light-dark">
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="flex flex-col space-y-2.5">
            <h2>Decentralization</h2>
            <Image
              src={DecentralizationImage}
              alt="Decentralization"
              className="flex-shrink-0 mb-5 sm:mb-0 sm:mr-5 max-h-[350px] rounded-lg"
              // Next.js Image component requires width and height
              width={350} // Replace with actual image width
              height={350} // Replace with actual image height
            />

            <div className="text-white">
              What is <b className="font-medium">decentralization?</b> Decentralization distributes control and decision-making away from a central authority to multiple independent entities..
            </div>
            <div className="text-white">
              <b className="font-medium">Benifits:-</b> <br />

              <ul className="space-y-2.5 my-4  font-sm">

                <li>Enhanced Security: No single point of failure.</li>
                <li>Increased Transparency:  Publicly visible transactions.</li>
                <li>Greater Autonomy: More control for participants.</li>
                <li>Reduced Costs: Fewer intermediaries.</li>
                <li>Scalability: Expands easily by adding more nodes.</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-light-dark p-5 rounded-lg">
              <b className="text-white font-medium">Decentralized Marketing</b>
              <ul>
                <li>Decentralized marketing uses smart contracts on the Smart Chain blockchain for automated and secure operations. Smart contracts execute transactions based on programmed rules and are immutable..</li>

                <li>Blockchain: A distributed ledger, maintained and protected by many computers globally.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark">
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
            What is a BUSD token
          </span>
          <div className="flex">
            <div className="space-y-2.5">
              <div>
                <b className="inline text-white font-medium notranslate mr-1.5">BUSD</b> is a stablecoin pegged to $1, approved by the New York State Department of Financial Services.
              </div>
              <div className="notranslate mr-1.5 text-white "><span className="text-white font-medium text-xl py-2">Features:-</span> <br />

              </div>
              <ul className="space-y-2.5">
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">1. Fixed Cost: Stable value..</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">2. Crypto Opportunities: Easily exchangeable with low fees..</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">3. Simple Calculations: Transactions in USD.</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">4. Precise Planning: Accurate cost tracking.</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">5. Participant Protection: Backed 1:1 by USD.</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded-lg bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
            <span className="notranslate mr-1.5">RonX</span> marketing
          </span>
          <div className="flex">
            <div className="flex mt-5 items-center sm:items-start flex-col"> */}

      {/* <video controls
                className="bg-black w-full mb-7.5 h-300px sm:h-180px"
                src={Ronxvideo}
                autoPlay
                muted
                loop  
                title="RonX Marketing Video"
              ></video> */}
      {/* <div className="mt-5 space-y-2.5">
                <span>
                  <b className="inline text-white font-medium">
                    <span className="notranslate mr-1.5">RonX</span> marketing
                  </b> is implemented on the Smart Chain blockchain smart contract technology. The marketing employs the BUSD token in the BEP-20 format with a stable exchange rate of 1 USD. To send
                  <span className="notranslate mx-1.5">BUSD</span> or any other token functioning in the Smart Chain blockchain, you will need a certain amount of
                  <span className="notranslate mx-1.5">BNB</span> to pay the fee.
                </span>
                <ul className="space-y-2.5">
                  <li className="flex">
                    <svg className="w-5 h-5 flex-shrink-0 inline-block mr-2.5" id="instruction_bnb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                      <defs>
                        <style>{'.cls-1{fill:#f0b90b}'}</style>
                      </defs>
                      <path className="cls-1" d="m60.24 100-16.37 16.31L27.5 100l16.37-16.31L60.24 100zM100 60.4l28.06 27.95 16.38-16.3L100 27.79 55.56 72.05l16.38 16.3L100 60.4zM156.13 83.69 139.76 100l16.37 16.31L172.5 100l-16.37-16.31zM100 139.6l-28.06-27.95-16.38 16.3L100 172.21l44.44-44.26-16.38-16.3L100 139.6z"></path>
                      <path className="cls-1" d="M100 116.31 116.37 100 100 83.69 83.63 100 100 116.31z"></path>
                      <circle cx="100" cy="100" r="91.21" style={{ fill: 'none', stroke: '#f0b90b', strokeMiterlimit: 10, strokeWidth: '12px' }}></circle>
                    </svg>
                    <span>
                      <b className="inline text-white font-medium notranslate mr-1.5">BNB</b> - This is the internal BEP-20 format coin of the Smart Chain blockchain, which is required to pay the transaction fee.
                    </span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 flex-shrink-0 inline-block mr-2.5" id="instructions_busd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                      <defs>
                        <style>{'.cls-1{fill:#f0b90b}'}</style>
                      </defs>
                      <g id="Layer_2">
                        <g id="Layer_1-2">
                          <path className="cls-1" d="m100 27.28 18 18.4-45.27 45.23-18-18ZM127.27 54.55l18 18.4-72.5 72.5-18-18ZM45.46 81.82l18 18.4-18 18-18-18ZM154.54 81.82l18 18.4-72.54 72.5-18-18Z"></path>
                        </g>
                      </g>
                      <circle cx="100" cy="100" r="91.21" style={{ fill: 'none', stroke: '#f0b90b', strokeMiterlimit: 10, strokeWidth: '12px' }}></circle>
                    </svg>
                    <span>
                      <b className="inline text-white font-medium notranslate mr-1.5">BUSD</b> - This is the BEP-20 format Smart Chain blockchain coin with a stable rate of 1 USD.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>

        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
            <span className="notranslate mr-1.5">RonX</span> marketing
          </span>
          <div className="flex">
            <div className="space-y-2.5">
              <span className="mb-2.5">
                <b className="inline text-white font-medium">
                  <span className="notranslate mr-1.5">RonX</span> marketing
                </b> uses decentralized smart contracts and BUSD tokens. It features a matrix system with four programs.
              </span>

              <div className="notranslate mr-1.5 text-white "><span className="text-white font-medium text-xl py-2">Features:-</span> <br />

              </div>
              <ul className="space-y-2.5">
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">1. Fixed Cost: Stable value..</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">2. Crypto Opportunities: Easily exchangeable with low fees..</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">3. Simple Calculations: Transactions in USD.</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">4. Precise Planning: Accurate cost tracking.</b>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">5. Participant Protection: Backed 1:1 by USD.</b>
                  </span>
                </li>
              </ul>
            </div>
            </div>

            </div>

          </div>
     
      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Registration</span>
          <div className="flex">
            <div className="flex items-center sm:items-start flex-col">
              <Image src={registrationPrev} className="flex-shrink-0 max-h-[350px] w-1/3 mb-2.5 item-center" alt="Registration Preview" />
              <div className="flex-col space-y-2.5 sm:order-2 my-4">
                <div>
                 
                  <span className="notranslate mr-1.5 my-3"></span>The registration fee concludes to be 11 BUSD for entering the program.
                  Enter the plans by activating the first levels in the RonX x3 and x4 programs for a total of 10 BUSD. Registration is recorded on the blockchain, and funds go to your upline. Subsequent levels can be activated individually.
                </div>
                {/* <div>
                  <b className="inline text-white font-medium">Referral linking.</b>
                  Also, your referral linkage remains unchanged, you can't change your upline partner, as well as your downline partners are assigned to you in your structure forever.
                </div>
                <div>
                  <b className="inline text-white font-medium">Personal Wallet.</b>
                  To become a member, you need to create your personal wallet.
                </div>
                <div>
                  Only you have access to the funds. All rewards according to marketing are instantly credited to your personal wallet. All transactions are stored in the public domain in a blockchain. You can easily check each transaction and see where the funds have been transferred.
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Registration</span>
          <div className="flex">
            <div className="flex items-center sm:items-start flex-col">
              <Image src={registration} className="flex-shrink-0 max-h-[350px] w-1/3 mb-2.5 item-cente" alt="Registration Preview" />
              <div className="flex-col sm:order-2 space-y-2.5">
                <div>
                  <b className="inline text-white font-medium">Registration in <span className="notranslate ml-1.5">RonX BUSD</span></b> is the activation of first levels in <span className="notranslate mx-1.5">RonX x3</span> and <span className="notranslate mx-1.5">x4</span> programs, which cost 5 <span className="notranslate mx-1.5">BUSD</span> each. In total, registration costs 10 <span className="notranslate mx-1.5">BUSD</span>. The first levels in x3 and x4 programs are always activated together and cannot be accessed separately. All the following levels can be purchased one by one, in ascending order.
                </div>
                <div>
                  Registration transaction is credited to the smart contract. The smart contract records your wallet number into the structure and redirects the funds to the personal wallet of the person that invited you (your upline partner). You occupy a free spot in their first level of x3 program and the first level of x4 program. Level 1 of x3 and Level 1 of x4 are respectively opened for you, and now you can invite partners through your personal referral link.
                </div>
                <div>
                  After activation of the first levels of x3 and x4 programs, the xXx and xGold program activation becomes available. After you activate it, the activation of xGold program becomes available.
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* </div> */}
      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How RonX x3 works
          </span>
          <div className="flex">
            <div className="flex items-center sm:items-start flex-col">
              <Image src={x3_preview} className="flex-shrink-0 max-h-[350px] w-1/3 mb-2.5 item-cente" alt="Registration Preview" />
              <div className="flex-col sm:order-2 space-y-2.5 my-4" >
              <div className="text-white">
              <b className="font-medium">Invite partners to fill spots:-</b> <br />

              <ul className="space-y-2.5 my-4  font-sm">

                <li>First Spot: You earn 100%.</li>
                <li>Second Spot: You earn 100%..</li>
                <li>Third Spot: Completes the cycle; 100% goes to your upline, and a new cycle begins..</li>
               
              </ul>
            </div>
                {/* <div>
                  <b className="inline text-white font-medium">Registration in <span className="notranslate ml-1.5">RonX BUSD</span></b> is the activation of first levels in <span className="notranslate mx-1.5">RonX x3</span> and <span className="notranslate mx-1.5">x4</span> programs, which cost 5 <span className="notranslate mx-1.5">BUSD</span> each. In total, registration costs 10 <span className="notranslate mx-1.5">BUSD</span>. The first levels in x3 and x4 programs are always activated together and cannot be accessed separately. All the following levels can be purchased one by one, in ascending order.
                </div>
                <div>
                  Registration transaction is credited to the smart contract. The smart contract records your wallet number into the structure and redirects the funds to the personal wallet of the person that invited you (your upline partner). You occupy a free spot in their first level of x3 program and the first level of x4 program. Level 1 of x3 and Level 1 of x4 are respectively opened for you, and now you can invite partners through your personal referral link.
                </div>
                <div>
                  After activation of the first levels of x3 and x4 programs, the xXx and xGold program activation becomes available. After you activate it, the activation of xGold program becomes available.
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>




      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>

        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How RonX x4 works</span>
          <Image src={x4_prpgram} className="flex-shrink-0 max-h-[350px] w-1/3 mb-2.5 item-cente" alt="Registration Preview" />
          <div className="flex">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div className="text-white">
              <b className="font-medium">Invite partners to fill spots:-</b> <br />

              <ul className="space-y-2.5 my-4  font-sm">

                <li>First Line (2 Spots): Rewards go to your upline..</li>
                <li>Second Line (4 Spots): You earn 100% from  spots 3,4 and 5.</li>
                <li>100% of the 6th spot in the second line goes to your upline, completes the cycle and a new cycles begins.</li>
               
              </ul>
            </div>
                  {/* <span>The partner completes the cycle of the level, the reward of 100% 100% goes to your upline, and the new cycle begins for you.</span>
                </li>
              </ul>
              <div className="bg-white-100 rounded-mini p-5">
                When a partner on the 2nd line joins your upline, they take a place in your 1st line — that is, you receive a <b className="inline text-white font-medium">spillover from above</b>. Similarly, <b className="inline text-white font-medium">a spillover can come from below</b>. When a partner comes to your downline on the 1st line, then they will take a place on your 2nd line. Thus, places in the x4 levels can be occupied by people invited only by you, or there can be none invited by you, or mixed.
              </div>
              <div>
                <ul>
                  <li className="flex items-center sm:items-start">

                    <span>Do not forget to activate the next level after the 1st cycle so as not to miss payments on the previous level.</span>
                  </li>
                </ul>
              </div>
            </div>*/}
          </div>
        </div> 
      </div>
      </div>





    </>
  );
};

export default Instruction;