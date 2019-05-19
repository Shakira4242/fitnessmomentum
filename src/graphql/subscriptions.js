// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name
    posts {
      items {
        id
        title
        url
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    name
    posts {
      items {
        id
        title
        url
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    name
    posts {
      items {
        id
        title
        url
      }
      nextToken
    }
  }
}
`;
export const onCreateVideo = `subscription OnCreateVideo {
  onCreateVideo {
    id
    title
    url
    user {
      id
      name
      posts {
        nextToken
      }
    }
  }
}
`;
export const onUpdateVideo = `subscription OnUpdateVideo {
  onUpdateVideo {
    id
    title
    url
    user {
      id
      name
      posts {
        nextToken
      }
    }
  }
}
`;
export const onDeleteVideo = `subscription OnDeleteVideo {
  onDeleteVideo {
    id
    title
    url
    user {
      id
      name
      posts {
        nextToken
      }
    }
  }
}
`;
