function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-t-lg">
      <table className="min-w-full divide-y-2 divide-gray-200  bg-white text-sm">{children}</table>
    </div>
  );
}

function Tbody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
}

function Row({ children }: { children: React.ReactNode }) {
  return <tr className={"whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center hover:bg-gray-100 duration-500"}>{children}</tr>;
}

function Head({ children }: { children: React.ReactNode }) {
  return (
    <thead>
      <Row>{children}</Row>
    </thead>
  );
}


function TH({ children }: { children: React.ReactNode }) {
  return <th  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
    {children}
  </th>;
}

function TD({ className, children }: {className?:string, children: React.ReactNode }) {
  return <td className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${className}`}>{children}</td>;
}

export { Table, Head, Tbody, Row, TH, TD };
