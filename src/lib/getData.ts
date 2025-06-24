export const getData = async ({
    contentType,
    entryUid,
    params={},
    includeAllReferences=false,
    // referenceFieldUID,
  }: {
    contentType: string;
    entryUid?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any };
    includeAllReferences?:boolean;
    referenceFieldUID?:string;
  }) => {
    try {
      // console.log("entryuid0", entryUid);  
      console.log("pppppp",JSON.stringify(params))
      // const defaultLocale = 'en-us';
     
      const query = params
      ? Object.keys(params)
          .map(key => `${key}=${params[key].toString()}`)
          .join('&')
      : '';
      console.log(" query",query)
  
      const url = entryUid
        ? `${process.env.CONTENTSTACK_HOST}v3/content_types/${contentType}/entries/${entryUid}?locale=en-us${query ? `&${query}` : ''}`
        : `${process.env.CONTENTSTACK_HOST}v3/content_types/${contentType}/entries?&locale=en-us`;
        
       
        console.log(" url:",url)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'api_key': process.env.CONTENTSTACK_API_KEY || '',
          'access_token': process.env.CONTENTSTACK_DELIVERY_TOKEN || '',
        },
        cache: 'no-store',
      });
     
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return entryUid ? data.entry : data.entries;
    } catch (error) {
      console.error('getData error:', error);
      return entryUid ? null : [];
    }
  };