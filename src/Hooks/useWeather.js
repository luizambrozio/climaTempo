import { http } from "../Services/http";

export const useWeather = ({ config }) => {
  const setPrevisaoLocalStorageWithTTL = ({ cidade, value }) => {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + 600000,
    };
    localStorage.setItem(cidade, JSON.stringify(item));
  };

  const getWeather = async () => {
    try {
      const response = await http.get(
        `?lat=${config?.lat}&lon=${config?.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`
      );

      return response.data.current;
    } catch (error) {
      return error;
    }
  };

  const getPrevisao = async () => {
    const cidadeStr = localStorage.getItem(config?.name);
    const item = JSON.parse(cidadeStr);

    if (!item || item?.value?.code) {
      const previsao = await getWeather();
      setPrevisaoLocalStorageWithTTL({
        cidade: config?.name,
        value: previsao,
      });

      return previsao;
    }

    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(config?.name);
      const previsao = await getWeather();
      setPrevisaoLocalStorageWithTTL({
        cidade: config?.name,
        value: previsao,
      });

      return previsao;
    }

    return item.value;
  };

  return {
    getPrevisao,
  };
};

export default useWeather;
