import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

export default function Home() {
  return (
    <div>
      INDEX PAGE
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
