import Owner from '@/types/OwnerType';
import User from '@/types/UserType';
import Channel from '@/types/ChannelType';
import OverrideColour from '@/types/OverrideColourType';
import Tag from '@/types/TagType';

interface Bcd {
    id: string;
    title: string;
    description: string;
    owner: Owner;
    users: User[];
    channels: Channel[];
    max_levels: number;
    overide_colours: OverrideColour[];
    tags: Tag[];
};

export default Bcd;