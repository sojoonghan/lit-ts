const onServer = async () => {
  const response = await fetch('');
  const data = await response.json();
  const dataEvent = new CustomEvent('data-event', {
    detail: {
      data: data,
    },
  });
  dispatchEvent(dataEvent);
};
