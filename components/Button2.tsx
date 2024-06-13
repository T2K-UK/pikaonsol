import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  icon?: string;
  full?: boolean;
}

const Button2 = ({ type, icon, full }: ButtonProps) => {
  return (
    <button type={type} className={`flex items-center justify-center ${full ? 'w-full' : ''} button-shadow hover:button-sink`}>
      <div className="relative">
        <span className="relative inline-block h-full w-full rounded border-2 border-black bg-white px-2 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-90 hover:text-black">
          {icon && <Image src={icon} width={24} height={24} alt={`${icon.split('.')[0]} icon`} className="inline-block" />}
        </span>
      </div>
    </button>
  )
}

export default Button2



