import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Group } from './side-bar.component';

interface SideBarModalProps {
  groups: Group[];
}

export function SideBarModal({ groups }: SideBarModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="flex items-center justify-center md:hidden">
        <button
          type="button"
          onClick={openModal}
          className="mx-6 w-full rounded-md bg-white py-4 font-medium text-black"
        >
          카테고리
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={closeModal}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mt-6 flex min-h-screen w-full transform flex-col space-y-3 divide-y rounded-t-2xl bg-white p-6 transition-all">
                {groups.map((group, idx) => (
                  <div key={idx} className="flex flex-col space-y-6 py-6">
                    <Dialog.Title
                      as="h3"
                      className="space-x-2 text-lg font-medium leading-6 text-gray-900"
                    >
                      <span>{group.icon}</span>
                      <span>{group.name}</span>
                    </Dialog.Title>
                    <div className="grid grid-cols-2 pl-8">
                      {group.tabs.map((tab, idx) => (
                        <div
                          key={idx}
                          onClick={closeModal} // Do something when clicked
                          className="p-2 text-sm text-black text-opacity-60"
                        >
                          {tab.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
