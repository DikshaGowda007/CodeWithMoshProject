const getCroppedImageUrl = (url: string) => {
    // Dummy image if no image is found
        if (!url) url = 'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg';
    // if (!url) return '';
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    console.log(`URL ${url}`)
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
export default getCroppedImageUrl;