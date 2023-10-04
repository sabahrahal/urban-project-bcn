export interface Image {
    id: string;
    title: string | null;
    description: string | null;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    vote: any | null;
    favorite: boolean;
    nsfw: any | null;
    section: string | null;
    account_url: string | null;
    account_id: string | null;
    is_ad: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    tags: any[];
    ad_type: number;
    ad_url: string;
    edited: string;
    in_gallery: boolean;
    link: string;
  }

  
  
  
  
  