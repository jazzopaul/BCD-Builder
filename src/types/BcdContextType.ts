import { Dispatch, SetStateAction } from 'react';
import Owner from './OwnerType';
import Channel from './ChannelType';
import OverrideColour from './OverrideColourType';
import Tag from './TagType';
import User from './UserType';

type BcdContext = {
    id: string;
    title: string;
    description: string;
    owner: Owner;
    users: User[];
    channels: Channel[];
    maxLevels: number;
    overrideColours: OverrideColour[];
    tags: Tag[];
    setId: Dispatch<SetStateAction<string>>;
    setTitle: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
    setOwner: Dispatch<SetStateAction<Owner>>;
    setUsers: Dispatch<SetStateAction<User[]>>;
    setChannels: Dispatch<SetStateAction<Channel[]>>;
    setMaxLevels: Dispatch<SetStateAction<number>>;
    setOverrideColours: Dispatch<SetStateAction<OverrideColour[]>>;
    setTags: Dispatch<SetStateAction<Tag[]>>;
};

export default BcdContext;