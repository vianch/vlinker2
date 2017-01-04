import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef  } from "@angular/core";

@Component({
    selector: "vl-table",
    templateUrl: "table.component.html",
    styles: [require("./table.scss").toString()],
})
export class TableComponent implements OnInit, AfterViewChecked  {
    @ViewChild('scrollBody')  scrollBody: ElementRef;

    public marginTop: string;
    public marginLeft: string;

    public ngOnInit(): void  {
        this.marginTop = "0";
        this.marginLeft = "0";
       this.doScroll();
    }

    public ngAfterViewChecked(): void {
        this.doScroll();
    }

    private doScroll(): void {
        try {
            this.scrollBody.nativeElement.onscroll = () => {
                this.marginTop =  `-${this.scrollBody.nativeElement.scrollTop}px`;
                this.marginLeft =  `-${this.scrollBody.nativeElement.scrollLeft}px`;
            };
        } catch (error) {
            console.error(error);
        }

    }
}
