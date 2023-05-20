
const PicturesSlide = () => {
    return (
        <div>
            <div className="text-center text-5xl font-bold">
                Shop Gallery
            </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/qmLcSgq/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/N6QP5zS/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/Gtr5D5S/louis-magnotti-r-Ecn8-OB83-EI-unsplash.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src=" https://i.ibb.co/xDLjRN9/olav-ahrens-rotne-jv-BXiyn-INGE-unsplash.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/qd2rkdW/michael-fousert-Kv2hu25-Rx2s-unsplash.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/tXdG7vF/giorgio-trovato-0-CZwu-Zhi-C84-unsplash.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PicturesSlide;