const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto">
            <p className="text-yellow-400">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-2 py-3 mt-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;