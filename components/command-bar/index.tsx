'use client';

import type { PropsWithChildren } from 'react';

import { useEffect, useState } from 'react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

import { useCommandBar } from './utils';

export const CommandBar = ({ children }: PropsWithChildren) => {
  const { actions } = useCommandBar();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className='p-0'>
        <Command>
          <CommandInput placeholder='Type a command or search...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            {actions.map((action) => (
              <CommandGroup key={action.heading} heading={action.heading}>
                {action.items.map((item) => (
                  <CommandItem
                    key={item.id}
                    className='group flex cursor-pointer items-center gap-2'
                    onSelect={() => {
                      setOpen(false);
                      item.perform();
                    }}
                  >
                    <item.icon className='size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3' />
                    <span>{item.name}</span>

                    <div className='ml-auto flex gap-1'>
                      {item.shortcut.map((short) => (
                        <CommandShortcut
                          key={short}
                          className='ml-0 flex size-6 items-center justify-center rounded bg-neutral-600 text-sm text-neutral-50 uppercase'
                        >
                          {short}
                        </CommandShortcut>
                      ))}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};
