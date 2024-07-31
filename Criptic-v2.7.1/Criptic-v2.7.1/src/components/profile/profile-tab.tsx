import { Suspense } from 'react';
import cn from 'classnames';
import ListCard from '@/components/ui/list-card';
import ParamTab, { TabPanel } from '@/components/ui/param-tab';
import TransactionSearchForm from '@/components/author/transaction-search-form';
import TransactionHistory from '@/components/author/transaction-history';
import CollectionCard from '@/components/ui/collection-card';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';
// import frtx from '../../assets/images/avatar/frgx.webp';
import { collections } from '@/data/static/collections';
// import GSign from '../../assets/images/greatersign.png';
// import Cup from '../../assets/images/cup.svg';
import Image from 'next/image';
import {
  authorWallets,
  authorNetworks,
  authorProtocols,
} from '@/data/static/author-profile';
import Loader from '@/components/ui/loader';

// Placeholder image URL, replace with the actual image URL
const profileImageUrl = '/path/to/your/profile-image.jpg';

const tabMenu = [
  { title: 'Collection', path: 'collection' },
  { title: 'Portfolio', path: 'portfolio' },
  { title: 'History', path: 'history' },
];

export default function ProfileTab() {
  const { layout } = useLayout();
  return (
    <Suspense fallback={<Loader variant="blink" />}>
      <ParamTab tabMenu={tabMenu}>
        <TabPanel className="focus:outline-none">
          <div className="profile-section p-6 bg-gray-900 text-white rounded-lg">
            <div className="profile-header flex items-center mb-6">
              <div className="w-full">
                <div className="profile-link mt-2 p-14 bg-[#406aff] bg-opacity-60 rounded-xl">
                  <h4 className="mb-6">Personal link</h4>
                  <a href="https://RonX.io/b/pyffvf" target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-2xl">
                    Link:
                  </a>
                </div>
              
              </div>
            </div>
   
          
          </div>
        </TabPanel>
        <TabPanel className="focus:outline-none">
          <div className={cn(
            'grid gap-4 xs:grid-cols-2 lg:grid-cols-2 lg:gap-5 xl:gap-6 3xl:grid-cols-3 4xl:grid-cols-4',
            layout === LAYOUT_OPTIONS.RETRO ? 'md:grid-cols-2' : 'md:grid-cols-1'
          )}>
            {collections?.map((collection) => (
              <CollectionCard item={collection} key={`collection-key-${collection?.id}`} />
            ))}
          </div>
        </TabPanel>
        <TabPanel className="focus:outline-none">
          <div className="space-y-8 md:space-y-10 xl:space-y-12">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
              {authorWallets?.map((wallet) => (
                <ListCard item={wallet} key={`wallet-key-${wallet?.id}`} variant="medium" />
              ))}
            </div>
            <div className="block">
              <h3 className="text-heading-style mb-3 uppercase text-gray-900 dark:text-white">Protocols</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {authorProtocols?.map((protocol) => (
                  <ListCard item={protocol} key={`protocol-key-${protocol?.id}`} variant="large" />
                ))}
              </div>
            </div>
            <div className="block">
              <h3 className="text-heading-style mb-3 uppercase text-gray-900 dark:text-white">Networks</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
                {authorNetworks?.map((network) => (
                  <ListCard item={network} key={`network-key-${network?.id}`} variant="medium" />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="focus:outline-none">
          <div className="space-y-8 xl:space-y-9">
            <TransactionSearchForm />
            <TransactionHistory />
          </div>
        </TabPanel>
      </ParamTab>
    </Suspense>
  );
}
