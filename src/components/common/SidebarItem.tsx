import Link from 'next/link';
import classNames from '@/src/utils/tailwind';

// TODO: narrow down types only to available routes with unions (instead of just name: string)
type Item = {
  name: string,
  href: string,
  Icon: (props: React.ComponentProps<'svg'> & {
    title?: string;
    titleId?: string;
  }) => JSX.Element,
  current: boolean,
}

const SidebarItem = ({item, mobile}: {item: Item, mobile: boolean}) => {
  const { name, href, Icon, current} = item;

  return (
    <Link
      key={name}
      href={href}
      className={classNames(
        current ? 'bg-rose-800 text-white' : 'text-indigo-100 hover:bg-rose-800 hover:text-white',
        mobile ? 'py-2 px-3 text-sm' : 'w-full p-3 flex-col text-xs',
        'group rounded-md flex items-center font-medium'
      )}
      aria-current={current ? 'page' : undefined}
    >
      <Icon
        className={classNames(
          current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
          'h-6 w-6'
        )}
        aria-hidden="true"
      />
      <span className="mt-2">{name}</span>
    </Link>
  )
}

export default SidebarItem;