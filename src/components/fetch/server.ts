type Data = {};
const onServer = async () => {
  const response = await fetch("");
  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw new Error();
      case 404:
        throw new Error();
      case 418:
        throw new Error();
      case 501:
        throw new Error();
    }
  }
  const data: Data = await response.json();
  const dataEvent = new CustomEvent("data-event", {
    detail: {
      data: data,
    },
  });
  dispatchEvent(dataEvent);
};
type fun<T extends (...arg: any[]) => any> = {
  func: T;
};
