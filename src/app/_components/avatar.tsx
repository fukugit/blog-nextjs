type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  // Get the base path from the environment variable of '/blog-nextjs'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="flex items-center">
      <img src={`${basePath}${picture}`} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
