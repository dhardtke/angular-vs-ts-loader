import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub890Component} from "./stub890.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub890Component
        }])
    ],
    declarations: [
        Stub890Component
    ]
})
export class Stub890Module {

}
