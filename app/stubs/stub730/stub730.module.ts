import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub730Component} from "./stub730.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub730Component
        }])
    ],
    declarations: [
        Stub730Component
    ]
})
export class Stub730Module {

}
