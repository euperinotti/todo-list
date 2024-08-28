export interface PageTitleProps {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="flex justify-start items-start h-full flex-col gap-2">
      <h1 className="text-5xl font-bold text-slate-100">{title}</h1>
      {description && (
        <span className="text-lg text-slate-500">
          {description}
        </span>
      )}
    </div>
  );
};
