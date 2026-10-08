const bundledImages = import.meta.glob<string>('../assets/images/*', {
  eager: true,
  import: 'default',
  query: '?url'
});

const bundledImagesByName = new Map(
  Object.entries(bundledImages).map(([path, url]) => [
    path.slice(path.lastIndexOf('/') + 1),
    url
  ])
);

export function resolveMediaUrl(source: string | undefined): string | undefined {
  if (!source || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(source)) {
    return source;
  }

  const suffixIndex = source.search(/[?#]/);
  const pathname = suffixIndex === -1 ? source : source.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : source.slice(suffixIndex);
  const filename = pathname.slice(pathname.lastIndexOf('/') + 1);
  const bundledImage = bundledImagesByName.get(filename);

  if (bundledImage) {
    return `${bundledImage}${suffix}`;
  }

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const absolutePath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (absolutePath === basePath || absolutePath.startsWith(`${basePath}/`)) {
    return `${absolutePath}${suffix}`;
  }

  return `${basePath}${absolutePath}${suffix}`;
}
