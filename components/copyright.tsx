type Props = {
    baseYear: number;
    name: string;
  };
  
  export default function Copyright({ baseYear, name }: Props) {
    const now = new Date();
    const year = now.getFullYear();
  
    return (
      <>
        &copy; {baseYear}{year > baseYear && `—${year}`} <span className="font-semibold">{name}</span> All rights reserved. (Not really, it&apos;s a joke!)
      </>
    );
  }
  