export default function Layout({ children, modal }) {
  // console.log("Modal rendering:", modal); // Add this to debug
  return (
    <>
      {children}
      {modal}
    </>
  );
}
