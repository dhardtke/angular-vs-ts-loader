import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub652Component} from "./stub652.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub652Component
        }])
    ],
    declarations: [
        Stub652Component
    ]
})
export class Stub652Module {

}
