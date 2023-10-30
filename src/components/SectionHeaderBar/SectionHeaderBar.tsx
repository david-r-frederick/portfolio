import React from "react";

class SectionHeaderBar extends React.Component<{ title: string; id?: string; }> {
    render() {
        return (
            <div className="bg-primary w-100 d-flex align-items-center">
                <h1 className="py-4 ps-5 text-white fw-light" id={this.props.id ?? undefined}>{this.props.title}</h1>
            </div>
        );
    }
}

export default SectionHeaderBar;
