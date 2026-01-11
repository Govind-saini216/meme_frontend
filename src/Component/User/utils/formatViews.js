export const formatViews = (views = 0) => {
  if (views < 1000) return views.toString();

  if (views < 1_000_000) {
    return `${(views / 1000).toFixed(views >= 10_000 ? 0 : 1)}K`;
  }

  if (views < 1_000_000_000) {
    return `${(views / 1_000_000).toFixed(views >= 10_000_000 ? 0 : 1)}M`;
  }

  return `${(views / 1_000_000_000).toFixed(1)}B`;
};
