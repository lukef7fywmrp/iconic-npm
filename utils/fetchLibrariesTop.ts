export const fetchLibrariesTop = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getLibrariesTop`
  );

  const data = await res.json();
  const librariesTop: Library[] = data.librariesTop;

  return librariesTop;
};
