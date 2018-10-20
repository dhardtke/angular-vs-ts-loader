import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub873Component} from "./stub873.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub873Component
        }])
    ],
    declarations: [
        Stub873Component
    ]
})
export class Stub873Module {

}
