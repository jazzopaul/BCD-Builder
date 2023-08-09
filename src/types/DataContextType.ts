import BcdData from "@/interfaces/BcdDataInterface";

type DataContext = {
    data: BcdData | null;
    loading: boolean;
};

export default DataContext;