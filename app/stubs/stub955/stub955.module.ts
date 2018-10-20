import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub955Component} from "./stub955.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub955Component
        }])
    ],
    declarations: [
        Stub955Component
    ]
})
export class Stub955Module {

}
