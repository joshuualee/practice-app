export default function LoadingSpinner() {
  return (
    <>
      <div className="mx-auto text-center">
        <h1 className="text-center">Pokemon</h1>
      </div>
      <div className="flex justify-center">
        <ul role="list" className="divide-y divide-gray-200">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </div>
    </>
  );
}

const Item = () => (
  <li className="flex py-4 h-[52.67px] bg-gray-400/60 w-44 animate-pulse rounded">
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900 capitalize"></p>
    </div>
  </li>
);
