export class Photos {
  '_embedded': {
    'items': Photo[]
  };
  '_links': object;
}

export class Photo {
  'checksum': string;
  'client_data': object;
  'created': number;
  'created_original': number;
  'data_size': number;
  'deleted': number;
  'description': string;
  'faces_count': number;
  'height': number;
  'id': string;
  'rating': number;
  'type': string;
  'updated': number;
  'width': number;
  '_links': {
    'self': {
      'href': string
    },
    'image_small': {
      'href': string
    },
    'image_middle': {
      'href': string
    },
    'content': {
      'href': string
    },
    'image_preview': {
      'href': string
    },
    'faces': {
      'href': string
    }
  };
}

export class ParsedPhoto {
  'id': string;
  'preview': string;
  'full': string;

  constructor(id: string, preview: string, full: string) {
    this.id = id;
    this.preview = preview;
    this.full = full;
  }
}
