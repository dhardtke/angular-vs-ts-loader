import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub794Component} from "./stub794.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub794Component
        }])
    ],
    declarations: [
        Stub794Component
    ]
})
export class Stub794Module {

}
