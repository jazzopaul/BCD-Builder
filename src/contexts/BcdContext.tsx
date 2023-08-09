import React, {createContext, useState, useContext, ReactNode, useEffect} from "react";
import BcdContextType from "@/types/BcdContextType";
import Owner from "@/types/OwnerType";
import User from "@/types/UserType";
import Channel from "@/types/ChannelType";
import OverrideColour from "@/types/OverrideColourType";
import Tag from "@/types/TagType";
import { v4 as uuidv4 } from 'uuid';
import DataContext from "./DataContext";

const BcdContextDefaultValues: BcdContextType = {
    id: "",
    title: "" ,
    description: "" ,
    owner: {
        id: "", 
        name: "", 
        email: "",
    },
    users: [],
    channels: [],
    maxLevels: 3,
    overrideColours: [],
    tags: [],
    setId: () => {},
    setTitle: () => {},
    setDescription: () => {},
    setOwner: () => {},
    setUsers: () => {},
    setChannels: () => {},
    setMaxLevels: () => {},
    setOverrideColours: () => {},
    setTags: () => {},
}

type Props = {
    children: ReactNode;
};

const BcdContext = createContext<BcdContextType>(BcdContextDefaultValues);

export const BcdProvider = ({children}: Props) => {

    const [id, setId] = useState<string>(uuidv4());
    const [title, setTitle] = useState<string>("Click here to add a title");
    const [description, setDescription] = useState<string>("Click here to add a description");
    const [owner, setOwner] = useState<Owner>({
        id: "", 
        name: "", 
        email: "",
    });
    const [users, setUsers] = useState<User[]>([]);
    const [channels, setChannels] = useState<Channel[]>([]);
    const [maxLevels, setMaxLevels] = useState<number>(3);
    const [overrideColours, setOverrideColours] = useState<OverrideColour[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);

    const { data, loading } = useContext(DataContext);

    const loadBcdGlobalDataFromJson = () => {
        if(data) {
            setId(data.id);
            setTitle(data.title);
            setDescription(data.description);
            setOwner(data.owner);
            setUsers(data.users);
            setChannels(data.channels);
            setMaxLevels(data.max_levels);
            setOverrideColours(data.overide_colours);
            setTags(data.tags);
            console.log("BCD global data has been set");
        } else {
            console.log("No global data has been set for the BCD");
        }
    };

    useEffect(() => {
            loadBcdGlobalDataFromJson();
            console.log("title", title);
        }
        ,[data, (loading === false)]);

    const ContextValues: BcdContextType = {
        id,
        title,
        description,
        owner,
        users,
        channels,
        maxLevels,
        overrideColours,
        tags,
        setId,
        setTitle,
        setDescription,
        setOwner,
        setUsers,
        setChannels,
        setMaxLevels,
        setOverrideColours,
        setTags,
    };


    return <BcdContext.Provider value={ContextValues} >
            {children}
        </BcdContext.Provider>
};

export default BcdContext;