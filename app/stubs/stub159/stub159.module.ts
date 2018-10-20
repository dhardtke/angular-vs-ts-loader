import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub159Component} from "./stub159.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub159Component
        }])
    ],
    declarations: [
        Stub159Component
    ]
})
export class Stub159Module {

}
