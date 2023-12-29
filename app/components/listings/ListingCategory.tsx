"use client";

interface ListingCategoryProps {
  icon: any;
  label: string;
  description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-2">
        <Icon size={40} className="text-neutral-600" />
        <div className="text-lg font-semibold">{label}</div>
        <div className="text-neutral-500 font-light">{description}</div>
        <div className="w-1 h-1 rounded-full bg-neutral-500"></div>
      </div>
    </div>
  );
};

export default ListingCategory;
