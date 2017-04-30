module <%= className %> = {
    include ReactRe.Component;
    let name = "<%= className %>";
    type props = ();

    let render { props } =>
        <div>
            (ReactRe.stringToElement name)
        </div>;
};

include ReactRe.CreateComponent <%= className %>;

let createElement = wrapProps ();