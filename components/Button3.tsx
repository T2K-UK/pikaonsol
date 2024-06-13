'use client';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  full?: boolean;
  onClick?: () => void;
}

const Button3 = ({ type, title, full, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`flex items-center justify-center ${full ? 'w-full' : ''} button3-shadow hover:button3-sink`}>
      <div className="relative ">
        <span className="relative flex items-center justify-center  h-full w-96 rounded border-2 border-black bg-white px-20 py-10 text-base font-bold text-black transition duration-100 hover:bg-yellow-90 hover:text-black" style={{ fontSize: '3rem' }}>
          {title}
        </span>
      </div>
    </button>
  )
}

export default Button3