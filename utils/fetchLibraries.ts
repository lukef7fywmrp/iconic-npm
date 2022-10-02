export const fetchLibraries = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getLibraries`
  );

  const data = await res.json();
  const libraries: Library[] = data.libraries;

  return libraries;
};
